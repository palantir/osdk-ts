import{j as r,M as s}from"./iframe-Dnd58nRU.js";import{P as p}from"./pdf-viewer-BGEdgY0P.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CcHUXOqH.js";import"./preload-helper-Bacdch3y.js";import"./PdfViewer-KMoONriq.js";import"./index-hYlZ2w7K.js";import"./BasePdfViewer-Bd756wRe.js";import"./BasePdfViewer.module.css-D9owyjOo.js";import"./PdfViewerAnnotationLayer-C1kCM6EB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bk8KzWQE.js";import"./PdfViewerOutlineSidebar-DzTigfUF.js";import"./PdfViewerSidebarHeader-D97RwzZD.js";import"./useBaseUiId-QDvzqdbv.js";import"./useControlled-DMuhh4MF.js";import"./CompositeRoot-DnLXbaAd.js";import"./CompositeItem-CHl5HG0C.js";import"./ToolbarRootContext-DfzKIhjA.js";import"./composite-Cv9S1-0v.js";import"./svgIconContainer-BHVYL7Dt.js";import"./PdfViewerSearchBar-DI5HM6Ek.js";import"./chevron-up-9fg6IA4z.js";import"./chevron-down-BXQTBdLk.js";import"./cross-DMNj6xwh.js";import"./PdfViewerSidebar-sO2IaMm-.js";import"./index-DIWs-l-i.js";import"./index-DlC_w9JR.js";import"./index-DuJ2F_r3.js";import"./PdfViewerToolbar-BkcVKXDP.js";import"./Button-DKxF8-HR.js";import"./chevron-right-u5iuH35h.js";import"./Input-C8T687yb.js";import"./search-CbjmGrOZ.js";import"./spin-DxMOTRN7.js";import"./error-BmtsW4Hj.js";import"./withOsdkMetrics-BOeNno_q.js";import"./makeExternalStore-CZWRqldg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
