import{j as r,M as s}from"./iframe-Ccapaqae.js";import{P as p}from"./pdf-viewer-BzJZP-S2.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DGlHD65g.js";import"./preload-helper-B0fDxzOV.js";import"./PdfViewer-BzymLtrA.js";import"./index-CAc_fcE_.js";import"./BasePdfViewer-CByGDAT2.js";import"./BasePdfViewer.module.css-X1NyD7Fl.js";import"./PdfViewerAnnotationLayer-lFMr_qO4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BZKJWS8U.js";import"./PdfViewerOutlineSidebar-DP6NCLrB.js";import"./PdfViewerSidebarHeader-BV6EFlmT.js";import"./useBaseUiId-BD8gqrlU.js";import"./useControlled-OeZ6f7Nb.js";import"./CompositeRoot-fv4Yi9n7.js";import"./CompositeItem-BQ56iutS.js";import"./ToolbarRootContext-h1fk3wwB.js";import"./composite-D5uZkbga.js";import"./svgIconContainer-usxw3tZ0.js";import"./PdfViewerSearchBar-ClfSO-nU.js";import"./chevron-up-Cvp81iEj.js";import"./chevron-down-NuPa8cs3.js";import"./cross-DVe-hkuB.js";import"./PdfViewerSidebar-B9K_VIPb.js";import"./index-BmU3DUw1.js";import"./index-DJ_c_Zcf.js";import"./index-Bb7LrozI.js";import"./PdfViewerToolbar-BZ6_slHA.js";import"./Button-YLU6pcy0.js";import"./chevron-right-CRd7FUHS.js";import"./Input-Cmwk-bsi.js";import"./search-gfBqCBGK.js";import"./spin-NGsbtcEa.js";import"./error-rF1GSzue.js";import"./withOsdkMetrics-Clo6yw-m.js";import"./makeExternalStore-g6LhMIcg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
