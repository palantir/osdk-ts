import{j as r,M as s}from"./iframe-Co9BLc26.js";import{P as p}from"./pdf-viewer-ChyFghmv.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BhetnZFG.js";import"./preload-helper-CjIZGyxJ.js";import"./PdfViewer-CmsqxCLp.js";import"./index-CaXavGNz.js";import"./BasePdfViewer-B6sj_RBY.js";import"./BasePdfViewer.module.css-7-Uzr_s4.js";import"./PdfViewerAnnotationLayer-u_z-GgQG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dn8Zd1c-.js";import"./PdfViewerOutlineSidebar-BWNLEKD1.js";import"./PdfViewerSidebarHeader-TKlgn_Fq.js";import"./useBaseUiId-B7X46CyE.js";import"./useControlled-Dm9Z_trU.js";import"./CompositeRoot-CKFRNDi_.js";import"./CompositeItem-v285VzZv.js";import"./ToolbarRootContext-CL3VUEMw.js";import"./composite-Bs7VpVD-.js";import"./svgIconContainer-XH9sO27g.js";import"./PdfViewerSearchBar-CWj84n0j.js";import"./chevron-up-BdSFnWDo.js";import"./chevron-down-C2RhY0pV.js";import"./cross-CdeazAmw.js";import"./PdfViewerSidebar-Ck8PrQqj.js";import"./index-D2VnSIP3.js";import"./index-83om9hRt.js";import"./index-DuuftHJS.js";import"./PdfViewerToolbar-BpHnPvNK.js";import"./Button-CKhU91Nr.js";import"./chevron-right-CKjcAcNQ.js";import"./Input-B7An9dFp.js";import"./search-DQyAxhHi.js";import"./spin-CUAvH2FR.js";import"./error-DApxBtMc.js";import"./withOsdkMetrics-D1C2IRuJ.js";import"./makeExternalStore-C6cHHmQm.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
