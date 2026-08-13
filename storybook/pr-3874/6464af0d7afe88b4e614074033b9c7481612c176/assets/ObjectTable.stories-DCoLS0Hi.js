import{j as i}from"./iframe-BcorHIlW.js";import{O as p}from"./object-table-B4UCWN34.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BwHgMIX6.js";import"./preload-helper-BKVHm-mS.js";import"./Table-48TCEO5W.js";import"./index-B_6nd-ig.js";import"./Dialog-DAgFtXxB.js";import"./cross-Dc1AyHJB.js";import"./svgIconContainer-CELc8YnE.js";import"./useBaseUiId-BNEl6a46.js";import"./InternalBackdrop-CqIU_AG5.js";import"./composite-CnKbnVU6.js";import"./index-DJgr8Ve3.js";import"./index-D0G6bTH7.js";import"./index-DmDsZq4W.js";import"./useEventCallback-BYEh8Lbq.js";import"./SkeletonBar-BQXc3_7i.js";import"./LoadingCell-BUKaj-MN.js";import"./ColumnConfigDialog-Dhs_TrtO.js";import"./DraggableList-CxHrnm_O.js";import"./search-DFDm-vhN.js";import"./Input-BDlnjPS-.js";import"./useControlled-BLGT_C96.js";import"./Button-D2Dfqz9N.js";import"./small-cross-CdBaewXq.js";import"./ActionButton-DrT_2S6p.js";import"./Checkbox-DF42yLUz.js";import"./useValueChanged-D0_LNJKx.js";import"./CollapsiblePanel-B0ClWT18.js";import"./MultiColumnSortDialog-W7cLl08V.js";import"./MenuTrigger-D7x_HiMZ.js";import"./CompositeItem-DAtA6HT0.js";import"./ToolbarRootContext-Dnx5ruWW.js";import"./getDisabledMountTransitionStyles-HxwKF_Gp.js";import"./getPseudoElementBounds-BeqhPp8n.js";import"./chevron-down-CuN7D4lo.js";import"./index-CrslJJ0M.js";import"./error-CqYYLkEc.js";import"./BaseCbacBanner-BXOWAbH2.js";import"./makeExternalStore-BLgd-akh.js";import"./Tooltip-jSHec6Gx.js";import"./PopoverPopup-COUulOaZ.js";import"./debounce-Bdi5BoLl.js";import"./useOsdkClient-DeO7tP5S.js";import"./tick-CUL9CaAQ.js";import"./DropdownField-D1C-_OGE.js";import"./isEqual-BGVz6dle.js";import"./withOsdkMetrics-CeNDUVo3.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
