import{j as i}from"./iframe-zt8gp64C.js";import{O as p}from"./object-table-C4SE7jNv.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CpojIKNV.js";import"./preload-helper-D2a9Td0v.js";import"./Table-C5TohfrD.js";import"./index-DoHyhu1H.js";import"./Dialog-CSUVimF5.js";import"./cross-De0nnUUS.js";import"./svgIconContainer-0IC9WVdo.js";import"./useBaseUiId-CCqwL6UI.js";import"./InternalBackdrop-DGaBLeqk.js";import"./composite-CiBYjtJq.js";import"./index-D5-rUW4c.js";import"./index-DKrLb4UT.js";import"./index-C2mA5K1h.js";import"./useEventCallback-COQUG7k2.js";import"./SkeletonBar-C0ADBR4Q.js";import"./LoadingCell-CrnRbXzY.js";import"./ColumnConfigDialog-CCtelOOx.js";import"./DraggableList-BKsEAfzj.js";import"./search-CkhkhpUr.js";import"./Input-CSTLDdZZ.js";import"./useControlled-B2Qs_OA4.js";import"./isEqual-B7ANsJ7b.js";import"./isObject-CuTVL94r.js";import"./Button-DeMnr8Np.js";import"./ActionButton-BjjkzeEb.js";import"./Checkbox-CvK_053Z.js";import"./useValueChanged-CEhTPnLC.js";import"./CollapsiblePanel-BSJO1h1v.js";import"./MultiColumnSortDialog-C0HuG-FX.js";import"./MenuTrigger-CcISEL9A.js";import"./CompositeItem-Brt2sv8U.js";import"./ToolbarRootContext-C57K8W0-.js";import"./getDisabledMountTransitionStyles-BpPAz8nb.js";import"./getPseudoElementBounds-BMx_lEUq.js";import"./chevron-down-CBSyC7tf.js";import"./index-D_xoP6e4.js";import"./error-9mYmZixJ.js";import"./BaseCbacBanner-DvyF_XxH.js";import"./makeExternalStore-kuj4NcTB.js";import"./Tooltip-C97TE3_V.js";import"./PopoverPopup-DVY_tgYX.js";import"./toNumber-CLCJ8uM8.js";import"./useOsdkClient-DVQ-u_Rd.js";import"./tick-DGaV7WNd.js";import"./DropdownField-DELSMJny.js";import"./withOsdkMetrics-C6hfCkXD.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
