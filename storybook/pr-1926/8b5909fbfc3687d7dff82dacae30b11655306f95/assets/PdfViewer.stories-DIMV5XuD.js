import{j as r,M as s}from"./iframe-BRcpmwFv.js";import{P as p}from"./pdf-viewer-CAchp_p2.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ZHABc6dE.js";import"./preload-helper-B5eDbs3J.js";import"./PdfViewer-Bqsomast.js";import"./index-DK3oZ2G7.js";import"./BasePdfViewer-eFLQ_3xn.js";import"./BasePdfViewer.module.css-Dg1ONwxT.js";import"./PdfViewerAnnotationLayer-DVHiTtJZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DrmZsaro.js";import"./PdfViewerOutlineSidebar-BCBaaRg2.js";import"./PdfViewerSidebarHeader-D1Q9dV1d.js";import"./useBaseUiId-BZpEg0W8.js";import"./useControlled-DbOKjk83.js";import"./CompositeRoot-CTz8OuYl.js";import"./CompositeItem-BjOjS-vj.js";import"./ToolbarRootContext-JjbSW9e7.js";import"./composite-BLjliQ-J.js";import"./svgIconContainer-BHIG5g_O.js";import"./PdfViewerSearchBar-C12n1vzM.js";import"./chevron-up-C07MusWk.js";import"./chevron-down-l6tBIHM5.js";import"./cross-C_YRX_a7.js";import"./PdfViewerSidebar-HoW5Y46G.js";import"./index-DqbNsSYI.js";import"./index-Droxy6Rm.js";import"./index-BnsjDL9p.js";import"./PdfViewerToolbar-45inAug2.js";import"./Button-D8AxOjNK.js";import"./chevron-right-Be2BBGJT.js";import"./Input-DcIPWMXq.js";import"./search-DB_eRkJ7.js";import"./spin-Cl_qtp8d.js";import"./error-b3Z30HbN.js";import"./withOsdkMetrics-Dwn_FNSW.js";import"./makeExternalStore-CZ91arQK.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
