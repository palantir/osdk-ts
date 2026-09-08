import{j as r,M as s}from"./iframe-DGAYn9ah.js";import{P as p}from"./pdf-viewer-B3jozPH-.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D3iJmskV.js";import"./preload-helper-ChgL7y96.js";import"./PdfViewer-B7Vdhgkm.js";import"./index-DTqlvJGy.js";import"./BasePdfViewer-BCXOhBX_.js";import"./BasePdfViewer.module.css-CiDLaCD6.js";import"./PdfViewerAnnotationLayer-DcA8XOJH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BHdcao5i.js";import"./PdfViewerOutlineSidebar-rquX3R5O.js";import"./PdfViewerSidebarHeader-ItZi8aAj.js";import"./useBaseUiId-gHWBFpJw.js";import"./useControlled-DxF1qebn.js";import"./CompositeRoot-BOtUersS.js";import"./CompositeItem-BcZSNonj.js";import"./ToolbarRootContext-YWaMXSM6.js";import"./composite-B3z1s4Xv.js";import"./svgIconContainer-CgzcDTkc.js";import"./PdfViewerSearchBar-tVhZB28n.js";import"./chevron-up-DUFMrD9Z.js";import"./chevron-down-CyN2TB6T.js";import"./cross-DupLKvqJ.js";import"./PdfViewerSidebar-CYkRc5Xs.js";import"./index-NqnPNXJw.js";import"./index-dFa0PhkU.js";import"./index-Bk-RkwxC.js";import"./PdfViewerToolbar-DSWBMOvA.js";import"./Button-C1GOspFh.js";import"./chevron-right-DWwRid_f.js";import"./Input-CmwSiSQg.js";import"./search-CbK0B2vo.js";import"./spin-DxiceH6Q.js";import"./error-BI4ZLamB.js";import"./withOsdkMetrics-DFTpKrdr.js";import"./makeExternalStore-BpmHT-XO.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
