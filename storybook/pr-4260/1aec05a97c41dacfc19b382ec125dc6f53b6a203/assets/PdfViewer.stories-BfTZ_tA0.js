import{j as r,M as s}from"./iframe-DQPhK9GU.js";import{P as p}from"./pdf-viewer-Buw_K6Cr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-n4rZh8OS.js";import"./preload-helper-BexD08qU.js";import"./PdfViewer-DXfnWTml.js";import"./index-D7bWxKkV.js";import"./BasePdfViewer-CyDHy1nE.js";import"./BasePdfViewer.module.css-2hnNDUlH.js";import"./PdfViewerAnnotationLayer-MscQkBq1.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dud1bpvc.js";import"./PdfViewerOutlineSidebar-DpfpXRaj.js";import"./PdfViewerSidebarHeader-DJdEco-9.js";import"./useBaseUiId-BcnbbCrD.js";import"./useControlled-wY0jaWl-.js";import"./CompositeRoot-Kk6TiXwH.js";import"./CompositeItem-D17QBVCs.js";import"./ToolbarRootContext-DUYvPpGK.js";import"./composite-D8rz_NRd.js";import"./svgIconContainer-C-2S33jf.js";import"./PdfViewerSearchBar-CHdMw-kO.js";import"./chevron-up-B-XvxxSC.js";import"./chevron-down-CEtDqD55.js";import"./cross-Bz5ncAg7.js";import"./PdfViewerSidebar-O0B6ul2n.js";import"./index-ueYSc4xO.js";import"./index-COKR49Jt.js";import"./index-nU_uKQML.js";import"./PdfViewerToolbar-rrmV0uAO.js";import"./Button-BMvHZDY9.js";import"./chevron-right-CL8uDCki.js";import"./Input-C-_mqWVh.js";import"./search-DEKkH3rw.js";import"./spin-DKROTmwn.js";import"./error-CMvmkLKQ.js";import"./withOsdkMetrics-BToX27Ix.js";import"./makeExternalStore-BK4AXna6.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
