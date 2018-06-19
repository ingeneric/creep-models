% Copyright © 2018 CA Bezuidenhout
% This file is part of Creep Models.
%
% Creep Models is free software: you can redistribute it and/or modify
% it under the terms of the GNU General Public License as published by
% the Free Software Foundation, either version 3 of the License, or
% (at your option) any later version.
%
% Creep Models is distributed in the hope that it will be useful,
% but WITHOUT ANY WARRANTY; without even the implied warranty of
% MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
% GNU General Public License for more details.
%
% You should have received a copy of the GNU General Public License
% along with Creep Models.  If not, see <http://www.gnu.org/licenses/>.
%=====================================================================
function DisplayMansonHaferd( mhModel , creepData ) 
  mhInfo = mhModel;

  mhInfo.masterCurve.coefficients = mhInfo.masterCurve.coefficients';
  mhInfo.masterCurve.testData.p = mhInfo.masterCurve.testData.p';
  mhInfo.masterCurve.trainData.p = mhInfo.masterCurve.trainData.p';
  mhInfo.masterCurve.trainData.stress = mhInfo.masterCurve.trainData.stress';  

  mhInfo.stressTest = StressTestMansonHaferd( mhModel, creepData );
  mhInfo.stressTest.T = mhInfo.stressTest.T';

  mhInfo.trTest = TrTestMansonHaferd( mhModel, creepData );
  mhInfo.trTest.T = mhInfo.trTest.T';
  mhInfo.trTest.stress = mhInfo.trTest.stress';
  mhInfo.trTest.trActual = mhInfo.trTest.trActual';
  mhInfo.trTest.trPredicted = mhInfo.trTest.trPredicted';
  mhInfo.trTest.errors.difference = mhInfo.trTest.errors.difference';
  mhInfo.trTest.errors.percentage = mhInfo.trTest.errors.percentage';

  mhInfo.constT = ConstTMansonHaferd( mhModel, mean( mhInfo.stressTest.T(:) ));
  mhInfo.constStress = ConstStressMansonHaferd( mhModel, mean( mhInfo.masterCurve.trainData.stress(:) ) );

  jsonFilePath = GetAbsolutePath('DisplayMansonHaferd.m');
  jsonFilePath = strcat(jsonFilePath,'/template/data.js');

  SaveJSON( mhInfo, jsonFilePath);  
  open( strcat(GetAbsolutePath('DisplayMansonHaferd.m'), '/template/index.html'));
endfunction