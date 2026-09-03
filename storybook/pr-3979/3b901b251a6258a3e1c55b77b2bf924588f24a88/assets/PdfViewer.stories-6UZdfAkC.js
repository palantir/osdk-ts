import{j as r,M as s}from"./iframe-BZrMvNjH.js";import{P as p}from"./pdf-viewer-C2pB5nlu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BL7DFXNR.js";import"./preload-helper-hIhWcbk1.js";import"./PdfViewer-CGV0NNlz.js";import"./index-DS2flFfG.js";import"./BasePdfViewer-x8eXtaL4.js";import"./BasePdfViewer.module.css-D0kdlX2y.js";import"./PdfViewerAnnotationLayer-U63f8HaT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BvIN4Zn4.js";import"./PdfViewerOutlineSidebar-bPKX3eZG.js";import"./PdfViewerSidebarHeader-Ctc-7UFE.js";import"./useBaseUiId-CswL1btF.js";import"./useControlled-Bj7UVyPM.js";import"./CompositeRoot-BpXetu1C.js";import"./CompositeItem-Dintp2Bw.js";import"./ToolbarRootContext-CSb78eVd.js";import"./composite-Bvd7iHGV.js";import"./svgIconContainer-CY0qYkeS.js";import"./PdfViewerSearchBar-Bqd1LQ6Y.js";import"./chevron-up-zNQyrXtG.js";import"./chevron-down-Cbk6ruv5.js";import"./cross-iphUExt8.js";import"./PdfViewerSidebar-DCCCv2xg.js";import"./index-B3YZJx-I.js";import"./index-BlvQlGL4.js";import"./index-CClIcESQ.js";import"./PdfViewerToolbar-Cr4DgFer.js";import"./Button-DnumB7pL.js";import"./chevron-right-DAV4W4KF.js";import"./Input-nfoLLdye.js";import"./search-DxeR06nu.js";import"./spin-DnFo-SNe.js";import"./error-C4YZPalR.js";import"./withOsdkMetrics-C9uhYNX4.js";import"./makeExternalStore-DqJxB7HS.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
