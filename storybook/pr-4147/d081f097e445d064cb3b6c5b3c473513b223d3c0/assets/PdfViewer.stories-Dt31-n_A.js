import{j as r,M as s}from"./iframe-DYAom9bR.js";import{P as p}from"./pdf-viewer-DZVpG1mg.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D5ZYmTVK.js";import"./preload-helper-wH_b8k-5.js";import"./PdfViewer-cMSorqQk.js";import"./index-BDzI0DMF.js";import"./BasePdfViewer-C-ZR5U-D.js";import"./BasePdfViewer.module.css-DMnD0mgL.js";import"./PdfViewerAnnotationLayer-ReXCgJ1b.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CHi6Tlc2.js";import"./PdfViewerOutlineSidebar-wPJGqhQd.js";import"./PdfViewerSidebarHeader-CGC4HUW7.js";import"./useBaseUiId-CEx3sHln.js";import"./useControlled-BCisCwEt.js";import"./CompositeRoot-wvlIDSzT.js";import"./CompositeItem-fVngu3j_.js";import"./ToolbarRootContext-a__5SMe8.js";import"./composite-BeIl570u.js";import"./svgIconContainer-DlXjEWqk.js";import"./PdfViewerSearchBar-o8CniLiM.js";import"./chevron-up-CqLVJKrP.js";import"./chevron-down-QO6dVwDP.js";import"./cross-C34zCmWz.js";import"./PdfViewerSidebar-C0jyCed-.js";import"./index-PnC5M3uF.js";import"./index-6FSLs8PI.js";import"./index-CrUWvWSh.js";import"./PdfViewerToolbar-Wv7AZ-yT.js";import"./Button-B95fuG8U.js";import"./chevron-right-BFETUbmg.js";import"./Input-OPGRVn8-.js";import"./search-V7G9cPkI.js";import"./spin-B-p1oGSn.js";import"./error-CX6Detdp.js";import"./withOsdkMetrics-BPYPoSmq.js";import"./makeExternalStore-CS6veLxB.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
