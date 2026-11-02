import{j as r,M as s}from"./iframe-B4_7uhV2.js";import{P as p}from"./pdf-viewer-B1QrVe4X.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-g9K1NXDx.js";import"./preload-helper-Cw77NyEA.js";import"./PdfViewer-DtM84mp5.js";import"./index-Mdm4Vdz6.js";import"./BasePdfViewer-B876Myhw.js";import"./BasePdfViewer.module.css-CscohgSB.js";import"./PdfViewerAnnotationLayer-gJ_zKo1N.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dowl3jqG.js";import"./PdfViewerOutlineSidebar-ByA3GLLp.js";import"./PdfViewerSidebarHeader-CYkyogk8.js";import"./useBaseUiId-jcj23Jre.js";import"./useControlled-DuB2GZAM.js";import"./CompositeRoot-C4SB20ex.js";import"./CompositeItem-CYgFQeQK.js";import"./ToolbarRootContext-By4aijuh.js";import"./composite-DzB4ymUk.js";import"./svgIconContainer-CfsWQbiM.js";import"./PdfViewerSearchBar-BqiWvoc5.js";import"./chevron-up-BIdRkicc.js";import"./chevron-down-DsD_ZS4y.js";import"./cross-rrtuBbZ-.js";import"./PdfViewerSidebar-DzYFledl.js";import"./index-q1tL4Nc7.js";import"./index-BIAFdQmf.js";import"./index-tpsUjXJC.js";import"./PdfViewerToolbar-D6CDtl-c.js";import"./Button-Bp6QDAip.js";import"./chevron-right-DQC9nsbO.js";import"./Input-D8cnvsnb.js";import"./search-CkWTC5d3.js";import"./spin-C7lJr5an.js";import"./error-CBs6A8KU.js";import"./withOsdkMetrics-DXLG4Ams.js";import"./makeExternalStore-D3O6kaQb.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
