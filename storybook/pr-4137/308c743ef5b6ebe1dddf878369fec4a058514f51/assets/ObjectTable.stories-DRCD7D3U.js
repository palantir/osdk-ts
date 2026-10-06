import{j as i}from"./iframe-C-FIv6o_.js";import{O as p}from"./object-table-BR87vr8J.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B2mwPOA1.js";import"./preload-helper-BlbsPBXS.js";import"./Table-CBWq0j-k.js";import"./index-DiYvs7cZ.js";import"./Dialog-CyW6OFQd.js";import"./cross-D6R41ZsP.js";import"./svgIconContainer-CH0vCO_z.js";import"./useBaseUiId-8fHz63fW.js";import"./InternalBackdrop-BUgLvfLu.js";import"./composite-DY-2h9J_.js";import"./index-B0FBWnJm.js";import"./index-Bbgv3w0b.js";import"./index-RlrlxoXZ.js";import"./useEventCallback-D7-_pjQT.js";import"./SkeletonBar-CqlWLlhL.js";import"./LoadingCell-B_YSRND_.js";import"./ColumnConfigDialog-50fShswv.js";import"./DraggableList-Dt_d4Esq.js";import"./search-kQP18GK_.js";import"./Input-BU1-9D_8.js";import"./useControlled-CSYe1hyF.js";import"./Button-CDwEbwO9.js";import"./small-cross-L8XNZVST.js";import"./ActionButton-Bqe7jk2Y.js";import"./Checkbox-DJeoxJY1.js";import"./useValueChanged-kbkB87xa.js";import"./CollapsiblePanel-BelOvsl6.js";import"./MultiColumnSortDialog-D1ECuTCa.js";import"./MenuTrigger-CY0Gj9Qo.js";import"./CompositeItem-C0WJbRI5.js";import"./ToolbarRootContext-Kc9KsJC5.js";import"./getDisabledMountTransitionStyles-BT087-qm.js";import"./getPseudoElementBounds-CNOiwK5k.js";import"./chevron-down-CGWHDi30.js";import"./index-CqnCJeYa.js";import"./error-BRmo5GmE.js";import"./BaseCbacBanner-BJugMq6i.js";import"./makeExternalStore-DtEBDbfK.js";import"./Tooltip-WyT2Q4mR.js";import"./PopoverPopup-BCj1y_R3.js";import"./debounce-UNygtkmW.js";import"./useOsdkClient-Bg9loZzt.js";import"./tick-q20xBySf.js";import"./DropdownField-DG5FyFzv.js";import"./isEqual-CFBwihmD.js";import"./withOsdkMetrics-CUO4ZO-M.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
