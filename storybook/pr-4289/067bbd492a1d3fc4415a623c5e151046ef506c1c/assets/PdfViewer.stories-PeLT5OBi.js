import{j as r,M as s}from"./iframe-BxJiroe5.js";import{P as p}from"./pdf-viewer-CK0n9CYl.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C2uJl0EH.js";import"./preload-helper-DLdhLncI.js";import"./PdfViewer-CPlJ-Mb7.js";import"./index-D3_UFpM5.js";import"./BasePdfViewer-BJOj1MH5.js";import"./BasePdfViewer.module.css-C_jHUZiA.js";import"./PdfViewerAnnotationLayer-e3o812jg.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DVo3SbGP.js";import"./PdfViewerOutlineSidebar-UQwByyEw.js";import"./PdfViewerSidebarHeader-BdV4NJvN.js";import"./useBaseUiId-CsOPh1qV.js";import"./useControlled-DfqnBr2w.js";import"./CompositeRoot-BLV6PWXU.js";import"./CompositeItem-BT8yR1a5.js";import"./ToolbarRootContext--suhwR1X.js";import"./composite-BKj-HEYH.js";import"./svgIconContainer-C-ufoPHL.js";import"./PdfViewerSearchBar-DwFBiz8X.js";import"./chevron-up-C402f-7H.js";import"./chevron-down-DjbhW8-h.js";import"./cross-Bw3wvyRT.js";import"./PdfViewerSidebar-CrK3KFF-.js";import"./index-hrPqGcKI.js";import"./index-nC3VniDk.js";import"./index-0CUe0U0r.js";import"./PdfViewerToolbar-CNuCyU6f.js";import"./Button-Bo57TzJg.js";import"./chevron-right-Ba8s5nQ5.js";import"./Input-DEdpGx6f.js";import"./search-JlbJ_F58.js";import"./spin-DG2wkoqv.js";import"./error-CmKYwFXp.js";import"./withOsdkMetrics-BDE5PqUj.js";import"./makeExternalStore-CSiVCh7w.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
