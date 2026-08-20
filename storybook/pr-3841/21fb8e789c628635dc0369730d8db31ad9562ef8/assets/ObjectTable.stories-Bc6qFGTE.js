import{j as i}from"./iframe-6HLyOHdg.js";import{O as p}from"./object-table-BqDhRQfd.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D8AMjc4V.js";import"./preload-helper-lnZu1Hku.js";import"./Table-DKP_0kc6.js";import"./index-DddEJcCL.js";import"./Dialog-ePQRy_Kd.js";import"./cross-D90aPG-h.js";import"./svgIconContainer-Cen0mKtu.js";import"./useBaseUiId-CIjMevu3.js";import"./InternalBackdrop-C2llqmWt.js";import"./composite-BM-mnNQY.js";import"./index-BeSpr_z9.js";import"./index-BfmI1DCD.js";import"./index-CMiXIGXs.js";import"./useEventCallback-CGyP_YXR.js";import"./SkeletonBar-BQe4W9P_.js";import"./LoadingCell-D8Pa0_Yo.js";import"./ColumnConfigDialog-Bmzsfr0o.js";import"./DraggableList-CnlM9Y2g.js";import"./search-B78YoXrH.js";import"./Input-D3asMaDe.js";import"./useControlled-CWJ6yU13.js";import"./Button-Mer8XKS3.js";import"./small-cross-Tosz4TC-.js";import"./ActionButton-Be9rA2WR.js";import"./Checkbox-_hF1W5ki.js";import"./useValueChanged-FStlX83F.js";import"./CollapsiblePanel-C6rkwz0D.js";import"./MultiColumnSortDialog-DAOghwQ8.js";import"./MenuTrigger-BVV9Quwn.js";import"./CompositeItem-CRehYzcR.js";import"./ToolbarRootContext-LDbs2zUX.js";import"./getDisabledMountTransitionStyles-DY_L7rbU.js";import"./getPseudoElementBounds-B1zH-3ZD.js";import"./chevron-down-CJW3cPUU.js";import"./index-CEc6v-Oz.js";import"./error-DLYWmfkx.js";import"./BaseCbacBanner-Bzz1Jbsh.js";import"./makeExternalStore-ySOpHfFQ.js";import"./Tooltip-BUvlQdJ2.js";import"./PopoverPopup-CxJqbIU3.js";import"./debounce-CLtGcTV5.js";import"./useOsdkClient-Cgy0juQI.js";import"./tick-CqjJQuuI.js";import"./DropdownField-DOg9JlAb.js";import"./isEqual-CUgvzXaH.js";import"./withOsdkMetrics-eihAybMP.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
