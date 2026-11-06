import{j as r,M as s}from"./iframe-CYWKmKsr.js";import{P as p}from"./pdf-viewer-d7dx6dhT.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BDyRCoVT.js";import"./preload-helper-CZxqSgr4.js";import"./PdfViewer-cfd8uCSy.js";import"./index-BjhNRAAe.js";import"./BasePdfViewer-BTxN3Ili.js";import"./BasePdfViewer.module.css-GwSMGg4q.js";import"./PdfViewerAnnotationLayer-CK9OSji4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DEPNswki.js";import"./PdfViewerOutlineSidebar-DL_f7s4o.js";import"./PdfViewerSidebarHeader-C5Y13vci.js";import"./useBaseUiId-CUYHUXgP.js";import"./useControlled-Cmfvaful.js";import"./CompositeRoot-QE5K7UBS.js";import"./CompositeItem-DES--d3v.js";import"./ToolbarRootContext-D-OgFfxn.js";import"./composite-BLYmi_ZT.js";import"./svgIconContainer-uvoYHEep.js";import"./PdfViewerSearchBar-CSIB3P7G.js";import"./chevron-up-D0YBQb2g.js";import"./chevron-down-CS2_34kJ.js";import"./cross-DwHZ8wsx.js";import"./PdfViewerSidebar-hUAuntH2.js";import"./index-BAMyMGOv.js";import"./index-BIzhtmMD.js";import"./index-CV_T3ZWx.js";import"./PdfViewerToolbar-CjtuhjC7.js";import"./Button-Dsxz3sQ9.js";import"./chevron-right-Br-MAih9.js";import"./Input-DhtTH-yg.js";import"./search-DEjEejFg.js";import"./spin-DqOZ_nu5.js";import"./error-D0LuxI0-.js";import"./withOsdkMetrics-C5qHzwaF.js";import"./makeExternalStore-BcIe4sBs.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
