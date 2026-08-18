import{j as i}from"./iframe-DdQFRxp3.js";import{O as p}from"./object-table-CgU8zier.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BGbEG16S.js";import"./preload-helper-DRTLQAg9.js";import"./Table-BewXHTi-.js";import"./index-TaYeYo9P.js";import"./Dialog-CzfsQsmI.js";import"./cross-sSLLNBfX.js";import"./svgIconContainer-uAn5cIaB.js";import"./useBaseUiId-vUIL2zRu.js";import"./InternalBackdrop-Bgn-yQPf.js";import"./composite-CE_Dj80Q.js";import"./index-CWWT09XN.js";import"./index-sOpdPN6D.js";import"./index-DGUr0vQ-.js";import"./useEventCallback-C4t0hT56.js";import"./SkeletonBar-BH6A2cWm.js";import"./LoadingCell-T8jVQDBg.js";import"./ColumnConfigDialog-CrTRCubR.js";import"./DraggableList-BYhvoQND.js";import"./search-nJivgl6W.js";import"./Input-Dylmv0nm.js";import"./useControlled-Cq-T_M7n.js";import"./Button-BdP51mHG.js";import"./small-cross-DH6TZDYg.js";import"./ActionButton-BdbE3v1s.js";import"./Checkbox-B87kemOG.js";import"./useValueChanged-C4HM5Mz3.js";import"./CollapsiblePanel-C7y-Kvqx.js";import"./MultiColumnSortDialog-DDxvjfEB.js";import"./MenuTrigger-BSqX7Abh.js";import"./CompositeItem-8f3x543_.js";import"./ToolbarRootContext-DCNtGQN6.js";import"./getDisabledMountTransitionStyles-J12WueKr.js";import"./getPseudoElementBounds-BLRtQhLY.js";import"./chevron-down-BosSoN29.js";import"./index-mv95Zkl0.js";import"./error-CvWe5-Ao.js";import"./BaseCbacBanner-DfdGEvuA.js";import"./makeExternalStore-peJQO0Rf.js";import"./Tooltip-aHmx8fwV.js";import"./PopoverPopup-DNY153Hn.js";import"./debounce-CJMKILxf.js";import"./useOsdkClient-zD-chn6z.js";import"./tick-dWysx9EM.js";import"./DropdownField-DncUGCO2.js";import"./isEqual-C1cjFRCW.js";import"./withOsdkMetrics-Bp0vBcfz.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
