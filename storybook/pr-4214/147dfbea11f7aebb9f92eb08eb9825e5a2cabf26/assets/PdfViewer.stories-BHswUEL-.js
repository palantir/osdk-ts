import{j as r,M as s}from"./iframe-DgffzXcd.js";import{P as p}from"./pdf-viewer-CiSd5tJV.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DQe5M0YK.js";import"./preload-helper-cnms5IGS.js";import"./PdfViewer-DvivdJJ4.js";import"./index-BBLuu-Hq.js";import"./BasePdfViewer-q7L74BtV.js";import"./BasePdfViewer.module.css-DwQCBHJ7.js";import"./PdfViewerAnnotationLayer-zWSIdBYZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CeIjSh3k.js";import"./PdfViewerOutlineSidebar-CviT4aGe.js";import"./PdfViewerSidebarHeader-Ch7peDuZ.js";import"./useBaseUiId-D8q2NPVv.js";import"./useControlled-BV_EXpzJ.js";import"./CompositeRoot-CEvtoOHV.js";import"./CompositeItem-BH2gdPXz.js";import"./ToolbarRootContext-DEjBOujG.js";import"./composite-CF6w6iAh.js";import"./svgIconContainer-Blhk3Pl5.js";import"./PdfViewerSearchBar-DzrXcZJh.js";import"./chevron-up-CRoF2lK9.js";import"./chevron-down-B-BBWbod.js";import"./cross-BSsj-b40.js";import"./PdfViewerSidebar-1KgQVJs9.js";import"./index-AOiW_Fy4.js";import"./index-CAwd0aO9.js";import"./index-CeFEKlyx.js";import"./PdfViewerToolbar-2sDj-KBW.js";import"./Button-UP0puh42.js";import"./chevron-right-BQyyoCBJ.js";import"./Input-c6SLv_Xy.js";import"./search-CJlxOI-X.js";import"./spin-CDHi3mjn.js";import"./error-C62WbJ6c.js";import"./withOsdkMetrics-BMLt42BN.js";import"./makeExternalStore-FJNApXaM.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
