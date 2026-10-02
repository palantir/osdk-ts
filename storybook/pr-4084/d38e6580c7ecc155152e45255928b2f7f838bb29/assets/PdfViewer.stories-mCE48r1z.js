import{j as r,M as s}from"./iframe-_pZ-OrnG.js";import{P as p}from"./pdf-viewer-CdNfnksx.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DjR6nydZ.js";import"./preload-helper-CI2nkxYP.js";import"./PdfViewer-DILGPmop.js";import"./index-BzR1Js4P.js";import"./BasePdfViewer-DjwH0mJV.js";import"./BasePdfViewer.module.css-BN-5woEI.js";import"./PdfViewerAnnotationLayer-1FKcnKdU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BW4ZIkgr.js";import"./PdfViewerOutlineSidebar-Do3ZTogV.js";import"./PdfViewerSidebarHeader-DwIdWAC6.js";import"./useBaseUiId-sTNVvHGV.js";import"./useControlled-MIg91upF.js";import"./CompositeRoot-BgW5BMuP.js";import"./CompositeItem-1-7kFxMp.js";import"./ToolbarRootContext-DDubgB6v.js";import"./composite-s_PtHBLY.js";import"./svgIconContainer-Df8znJbK.js";import"./PdfViewerSearchBar-COOLSCAN.js";import"./chevron-up-By0AYAVT.js";import"./chevron-down-DaGWzrOS.js";import"./cross-DHXoKhRr.js";import"./PdfViewerSidebar-BLumvj1l.js";import"./index-5qJDayCH.js";import"./index-C7S3dsZZ.js";import"./index-fBaLvFhr.js";import"./PdfViewerToolbar-BpUTRJ-o.js";import"./Button-HWVms3sL.js";import"./chevron-right-3sWAwZhK.js";import"./Input-DDttcV3K.js";import"./search-ChtcLVXZ.js";import"./spin-NRZmYPHU.js";import"./error-CDa2ZV4b.js";import"./withOsdkMetrics-CNAkmbs_.js";import"./makeExternalStore-_KUFuRZc.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var t,m,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    const {
      object: employee,
      isLoading
    } = useOsdkObject(Employee, MEDIA_EMPLOYEE_PK);
    if (isLoading || !employee?.employeeDocuments) {
      return <div style={{
        height: "600px"
      }}>Loading OSDK media…</div>;
    }
    return <div style={{
      height: "600px"
    }}>
        <PdfViewer media={employee.employeeDocuments} />
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
