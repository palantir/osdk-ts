import{j as r,M as s}from"./iframe-B3Tmb11O.js";import{P as p}from"./pdf-viewer-DJ9eArEW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CNHtaZhn.js";import"./preload-helper-gakQdOi4.js";import"./PdfViewer-CBYWPar1.js";import"./index-kZbgPBf-.js";import"./BasePdfViewer-DsH4rmHj.js";import"./BasePdfViewer.module.css-sUA7eAOY.js";import"./PdfViewerAnnotationLayer-1mSNDuqd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CjCS6iHb.js";import"./PdfViewerOutlineSidebar-BLshR_8y.js";import"./PdfViewerSidebarHeader-BRgrjtt9.js";import"./useBaseUiId-Bm-vJATe.js";import"./useControlled-uOco89xC.js";import"./CompositeRoot-Rjl5Ixan.js";import"./CompositeItem-BKoGSNiO.js";import"./ToolbarRootContext-CqEf4XEU.js";import"./composite-2j3kB3hN.js";import"./svgIconContainer-BsQARODV.js";import"./PdfViewerSearchBar-DH-sPQ2J.js";import"./chevron-up-BRvUcC8v.js";import"./chevron-down-CsQH01fJ.js";import"./cross-C-JhHfM1.js";import"./PdfViewerSidebar-CnVf3LjP.js";import"./index-D4PUZNNP.js";import"./index-DfPJChMi.js";import"./index-QmBbQjFR.js";import"./PdfViewerToolbar-ClTKRsMc.js";import"./Button-BRlUcQED.js";import"./chevron-right-B5RWh1z-.js";import"./Input-CWGLraK0.js";import"./search-ZvK9KowR.js";import"./spin-BDy1yXny.js";import"./error-DCFU_pHO.js";import"./withOsdkMetrics-BtfS3RDS.js";import"./makeExternalStore-fsIP6Iuw.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
