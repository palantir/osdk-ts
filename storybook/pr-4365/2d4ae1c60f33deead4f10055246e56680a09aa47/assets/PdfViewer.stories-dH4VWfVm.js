import{j as r,M as s}from"./iframe-CwoOGB90.js";import{P as p}from"./pdf-viewer-CKM4lp7u.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cq5YvbCK.js";import"./preload-helper-zjr9DTNv.js";import"./PdfViewer-Kl1Uv7gL.js";import"./index-CZrnOEge.js";import"./BasePdfViewer-EUKRUKn4.js";import"./BasePdfViewer.module.css-Cl5AXmGC.js";import"./PdfViewerAnnotationLayer-lZgeNNGl.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DtZQl8-O.js";import"./PdfViewerOutlineSidebar-PigSJH7X.js";import"./PdfViewerSidebarHeader-Dkg6fvE7.js";import"./useBaseUiId-CG_HMXOZ.js";import"./useControlled-CyV_xO7n.js";import"./CompositeRoot-B0xHKeUX.js";import"./CompositeItem-uLTqCAuJ.js";import"./ToolbarRootContext-BHlqCq8I.js";import"./composite-CQ1lSzH1.js";import"./svgIconContainer-vpSdtZHg.js";import"./PdfViewerSearchBar-DsAoP_VR.js";import"./chevron-up-CqANW7ml.js";import"./chevron-down-CzfXAkFG.js";import"./cross-84LZ_c3o.js";import"./PdfViewerSidebar-VtvVPL-y.js";import"./index-DRO4fLjt.js";import"./index-BP83VGlc.js";import"./index-CtieK9tm.js";import"./PdfViewerToolbar-DDk12H0J.js";import"./Button-CzS_tZvQ.js";import"./chevron-right-cogNMC6o.js";import"./Input-Bfvllh0J.js";import"./search-B4Rhn5WX.js";import"./spin-CnMMIvao.js";import"./error-D1I108xZ.js";import"./withOsdkMetrics-IkpPb6vj.js";import"./makeExternalStore-BAl3wc3x.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
