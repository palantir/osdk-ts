import{j as r,M as s}from"./iframe-KThmj19P.js";import{P as p}from"./pdf-viewer-DHq7Unk0.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CEDjaMdL.js";import"./preload-helper-Cw3n3hSQ.js";import"./PdfViewer-DP04QkJt.js";import"./index-8dp596C-.js";import"./BasePdfViewer-D7n78qyj.js";import"./BasePdfViewer.module.css-CwVbak2-.js";import"./PdfViewerAnnotationLayer-9H0NDsf7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CIxvvKoP.js";import"./PdfViewerOutlineSidebar-YL91mLPp.js";import"./PdfViewerSidebarHeader-CEJAuNss.js";import"./useBaseUiId-CO0UXqZj.js";import"./useControlled-Cit5AGWi.js";import"./CompositeRoot-DbSkcG9S.js";import"./CompositeItem-B-b-pN3u.js";import"./ToolbarRootContext-BtS_uykU.js";import"./composite-DhtQTRu3.js";import"./svgIconContainer-BadPSwg5.js";import"./PdfViewerSearchBar-CpP2u-9m.js";import"./chevron-up-Bimen3xm.js";import"./chevron-down-C1Y2Cd7i.js";import"./cross-DgJrOo32.js";import"./PdfViewerSidebar-D9UC_fWT.js";import"./index-BzpGTle2.js";import"./index-x3jhKnXC.js";import"./index-DlUZDviY.js";import"./PdfViewerToolbar-DLAULYsO.js";import"./Button-C5g5AH7h.js";import"./chevron-right-CLfIUT-E.js";import"./Input-DjgUB-Rn.js";import"./search-WKJE02Vc.js";import"./spin-Q4U6_hCw.js";import"./error-BU9XZpJG.js";import"./withOsdkMetrics-hz19pnqZ.js";import"./makeExternalStore-BCV4KITu.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
