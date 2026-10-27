import{j as r,M as s}from"./iframe-DT3_qYOR.js";import{P as p}from"./pdf-viewer-CuglgCin.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B6ravP8c.js";import"./preload-helper-DJcbeZXn.js";import"./PdfViewer-Cwotl7mn.js";import"./index-Bms-eX8O.js";import"./BasePdfViewer-4gZi7Hxx.js";import"./BasePdfViewer.module.css-D3uH1v8W.js";import"./PdfViewerAnnotationLayer-BbmF3K-Y.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CSx6ZDNB.js";import"./PdfViewerOutlineSidebar-BQknlRAy.js";import"./PdfViewerSidebarHeader-CKm7KKBn.js";import"./useBaseUiId-Btj_fTu8.js";import"./useControlled-CTkDHUnO.js";import"./CompositeRoot-ykWtA3-w.js";import"./CompositeItem-DAx93KY8.js";import"./ToolbarRootContext-DRepvQNE.js";import"./composite-CY9Hfsj0.js";import"./svgIconContainer-Dzwe0jqD.js";import"./PdfViewerSearchBar-Bw9rtnGw.js";import"./chevron-up-tzlIvMDo.js";import"./chevron-down-CQZ2GZcC.js";import"./cross-DsVapprp.js";import"./PdfViewerSidebar-T0gudL4Y.js";import"./index-kKFIJm10.js";import"./index-BgPwEE_0.js";import"./index-BqtCGU3q.js";import"./PdfViewerToolbar-Dpv7353i.js";import"./Button-URBwxfkh.js";import"./chevron-right-BUlmkpLk.js";import"./Input-Lzcgvy8p.js";import"./search-mMYnAHur.js";import"./spin-CXH6Gq5G.js";import"./error-CfEF0UDB.js";import"./withOsdkMetrics-pibb9djU.js";import"./makeExternalStore-xyuIW0T9.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
