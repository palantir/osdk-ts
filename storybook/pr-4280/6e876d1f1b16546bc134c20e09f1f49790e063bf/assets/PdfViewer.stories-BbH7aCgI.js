import{j as r,M as s}from"./iframe-Cbj36Vfl.js";import{P as p}from"./pdf-viewer-C3Cmw6ME.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BOpNYitl.js";import"./preload-helper-D9vtqHHo.js";import"./PdfViewer-Cq_HUncl.js";import"./index-CsY1LewD.js";import"./BasePdfViewer-CCmJqpdC.js";import"./BasePdfViewer.module.css-CGeOBMdH.js";import"./PdfViewerAnnotationLayer-DAWKPJMZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-FdKOlrib.js";import"./PdfViewerOutlineSidebar-Bt_R46z8.js";import"./PdfViewerSidebarHeader-j3_6DNtn.js";import"./useBaseUiId-Dm0BFRC6.js";import"./useControlled-BLkU7nYF.js";import"./CompositeRoot-CLbuLNkg.js";import"./CompositeItem-DyJlzvO6.js";import"./ToolbarRootContext-B2HRt-p3.js";import"./composite-BNLz_aLE.js";import"./svgIconContainer-hIUzSHkO.js";import"./PdfViewerSearchBar-CnUZ1coO.js";import"./chevron-up-B3Zo3Xg2.js";import"./chevron-down-b6fjz5-P.js";import"./cross-BMM6M_v0.js";import"./PdfViewerSidebar-CuPGIOoA.js";import"./index-DGMJzfmR.js";import"./index-BCwTQa_2.js";import"./index-C4i1VFtD.js";import"./PdfViewerToolbar-DW4xNy9I.js";import"./Button-BvKlSQww.js";import"./chevron-right-DAOvUiYr.js";import"./Input-bczR2KJT.js";import"./search-B0cFd55B.js";import"./spin-DQK2RrRd.js";import"./error-B5SQU-7B.js";import"./withOsdkMetrics-CvORwH-d.js";import"./makeExternalStore-BQvhAloH.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
