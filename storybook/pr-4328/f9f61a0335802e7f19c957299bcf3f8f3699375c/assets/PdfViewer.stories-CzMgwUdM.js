import{j as r,M as s}from"./iframe-BWanzCtz.js";import{P as p}from"./pdf-viewer-BKiNcWoE.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C5iz0-RD.js";import"./preload-helper-DAi-P9Ju.js";import"./PdfViewer-BG8kPHV7.js";import"./index-Cay7iVqb.js";import"./BasePdfViewer-BMl3kbWo.js";import"./BasePdfViewer.module.css-DeJGQ4c7.js";import"./PdfViewerAnnotationLayer-DCiekI0k.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dl5jr_cT.js";import"./PdfViewerOutlineSidebar-BpjwFCvA.js";import"./PdfViewerSidebarHeader-DK53YfB3.js";import"./useBaseUiId-C5dN58Q0.js";import"./useControlled-OnnNsrqI.js";import"./CompositeRoot-DeTqeY2T.js";import"./CompositeItem-BcxNHfQK.js";import"./ToolbarRootContext-De0bccAd.js";import"./composite-BafjzlJM.js";import"./svgIconContainer-DSaD-I6F.js";import"./PdfViewerSearchBar-B89sOb6S.js";import"./chevron-up-hkk7eA-X.js";import"./chevron-down-BeOHwgJN.js";import"./cross-BVvC7Zca.js";import"./PdfViewerSidebar-D4VhDzIz.js";import"./index-CqrxIVAp.js";import"./index-ChQ5JBSj.js";import"./index-Dt-Mk7jk.js";import"./PdfViewerToolbar-DEays6mk.js";import"./Button-BAzXvXXK.js";import"./chevron-right-CelzGGy6.js";import"./Input-Bt15IjV-.js";import"./search-DRygowk4.js";import"./spin-p8PHDX-g.js";import"./error-CdqtE7bq.js";import"./withOsdkMetrics-d8l__l47.js";import"./makeExternalStore-_zqsQAA7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
