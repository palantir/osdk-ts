import{j as r,M as s}from"./iframe-RU8IGrNT.js";import{P as p}from"./pdf-viewer-DnHUmTRS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bta0OHyk.js";import"./preload-helper-CC2SHOu0.js";import"./PdfViewer-E48v5C90.js";import"./index-D0VksrnV.js";import"./BasePdfViewer-K5Tfn30_.js";import"./BasePdfViewer.module.css-CGHCEZW7.js";import"./PdfViewerAnnotationLayer-v0UNqBVH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-f247fUUJ.js";import"./PdfViewerOutlineSidebar-e8DfZ80P.js";import"./PdfViewerSidebarHeader-DnhUcMs0.js";import"./useBaseUiId-B7sFi6pv.js";import"./useControlled-D60JD0mh.js";import"./CompositeRoot-BPOHmP0R.js";import"./CompositeItem-CC8f_DCj.js";import"./ToolbarRootContext-sPvQNWqX.js";import"./composite-qIXSIzDA.js";import"./svgIconContainer-CAf1V-Tr.js";import"./PdfViewerSearchBar-DH_MREox.js";import"./chevron-up-DF4kmb64.js";import"./chevron-down-D65XdSbD.js";import"./cross-4-OM6Ghb.js";import"./PdfViewerSidebar-XdCwiZlt.js";import"./index-BALz8rwl.js";import"./index-DDfKVfwf.js";import"./index-WBmL8T14.js";import"./PdfViewerToolbar-CYRPOCFW.js";import"./Button-i-hZGgk2.js";import"./chevron-right-3Hoj-H_S.js";import"./Input-9-d8I3Qs.js";import"./search-C35W7rra.js";import"./spin-DmK0Ndix.js";import"./error-DtrLgX5c.js";import"./withOsdkMetrics-D0KBj7Xc.js";import"./makeExternalStore-m1NamX6V.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
