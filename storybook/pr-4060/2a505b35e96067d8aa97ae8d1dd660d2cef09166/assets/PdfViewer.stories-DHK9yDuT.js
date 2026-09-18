import{j as r,M as s}from"./iframe-DYP6I0EJ.js";import{P as p}from"./pdf-viewer-2Xzb22XI.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ClKNqk_G.js";import"./preload-helper-sS4hYFkK.js";import"./PdfViewer-BvNApfeS.js";import"./index-DIhwEquj.js";import"./BasePdfViewer-CXVRHKzM.js";import"./BasePdfViewer.module.css-B-zG8A3g.js";import"./PdfViewerAnnotationLayer-CRjxe2-R.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DuAQDARF.js";import"./PdfViewerOutlineSidebar-CKurWQSz.js";import"./PdfViewerSidebarHeader-DuyHxwLI.js";import"./useBaseUiId-BZiJrEE8.js";import"./useControlled-CBcSqYsQ.js";import"./CompositeRoot-ByWoXpEH.js";import"./CompositeItem-BuWL3KPI.js";import"./ToolbarRootContext-6dERQM_o.js";import"./composite-DQKMgq2L.js";import"./svgIconContainer-C4jga87M.js";import"./PdfViewerSearchBar-CayYLwO-.js";import"./chevron-up-BU90ll14.js";import"./chevron-down-DgAcZbyD.js";import"./cross-bDPWwylA.js";import"./PdfViewerSidebar-C47c3SMC.js";import"./index-Bbf985kl.js";import"./index-kgSrvS5D.js";import"./index-C2R1rTgL.js";import"./PdfViewerToolbar-Ove_klWo.js";import"./Button-BBpZA8JE.js";import"./chevron-right-BFx4PWe3.js";import"./Input-CX9B7mOe.js";import"./search-DC-q2Fvd.js";import"./spin-DFtkdKjJ.js";import"./error-BJ0QSSt_.js";import"./withOsdkMetrics-1ciRu-eY.js";import"./makeExternalStore-DN0LusY8.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
