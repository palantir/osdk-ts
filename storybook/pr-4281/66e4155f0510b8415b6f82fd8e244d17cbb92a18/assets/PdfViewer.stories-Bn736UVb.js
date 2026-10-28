import{j as r,M as s}from"./iframe-BLF1KQu4.js";import{P as p}from"./pdf-viewer-CGZsewW_.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dey0HWR6.js";import"./preload-helper-GcktYcA3.js";import"./PdfViewer-Cu4sMTL-.js";import"./index-aXPerbbD.js";import"./BasePdfViewer-D5H74Xzk.js";import"./BasePdfViewer.module.css-DruT0XA_.js";import"./PdfViewerAnnotationLayer-PdXvyy60.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dt3N6-6m.js";import"./PdfViewerOutlineSidebar-CB886v7T.js";import"./PdfViewerSidebarHeader-DmoTsxqM.js";import"./useBaseUiId-BxovN8d6.js";import"./useControlled-BnRS1sX7.js";import"./CompositeRoot-BnIl24Qb.js";import"./CompositeItem-jL-VyW-C.js";import"./ToolbarRootContext-FsR9CG6K.js";import"./composite-fyXwWWU2.js";import"./svgIconContainer-DjnJEiXc.js";import"./PdfViewerSearchBar-BXlPoi1e.js";import"./chevron-up-Dr0nS4Jc.js";import"./chevron-down-CtuyY29H.js";import"./cross-D5Owe--z.js";import"./PdfViewerSidebar-QoDWLXl_.js";import"./index-DoZkCOy9.js";import"./index-BeFBWWGf.js";import"./index-CJxk2Woh.js";import"./PdfViewerToolbar-CTC-hdG7.js";import"./Button-YyRiSJZP.js";import"./chevron-right-BHaqyXak.js";import"./Input-ep0tMe9Y.js";import"./search-jxTo-jPn.js";import"./spin-BAAANgFf.js";import"./error-8EJJ_3qq.js";import"./withOsdkMetrics-JDZWgyN8.js";import"./makeExternalStore-G2m-9f72.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
