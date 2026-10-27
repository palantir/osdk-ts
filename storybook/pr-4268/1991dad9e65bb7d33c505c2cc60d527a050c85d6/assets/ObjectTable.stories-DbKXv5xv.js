import{j as i}from"./iframe-BaflQOGd.js";import{O as p}from"./object-table-rBYFG3dL.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DEdTQpMR.js";import"./preload-helper-p4HJijQg.js";import"./Table-BZhq6jNP.js";import"./index-Cdh_dFWj.js";import"./Dialog-sEWbFpCS.js";import"./cross-BGrOCP65.js";import"./svgIconContainer-C8p2nfID.js";import"./useBaseUiId-pk7UMSg-.js";import"./InternalBackdrop-BXpufEJp.js";import"./composite-Bz466JDP.js";import"./index-BbhGUNVZ.js";import"./index-8FM1YS3J.js";import"./index-gtiiyw16.js";import"./useEventCallback-CKswwic-.js";import"./SkeletonBar-p10R1lcv.js";import"./LoadingCell-CH2uP32b.js";import"./ColumnConfigDialog-DFdfDYob.js";import"./DraggableList-BBK4Chui.js";import"./search-BBcvVFuT.js";import"./Input-C7CjAQyY.js";import"./useControlled-BHd0pcmo.js";import"./Button-Bdo2X4x8.js";import"./small-cross-CskAyC0y.js";import"./ActionButton-DIqkcEFC.js";import"./Checkbox-Sizrw6ib.js";import"./useValueChanged-BkzyuB8t.js";import"./CollapsiblePanel-BDr9gif1.js";import"./MultiColumnSortDialog-CmnGKHoe.js";import"./MenuTrigger-CEe5FZ0H.js";import"./CompositeItem-nIPenTO0.js";import"./ToolbarRootContext-CwJdNdBU.js";import"./getDisabledMountTransitionStyles-Zf4kfjLM.js";import"./getPseudoElementBounds-CHW9P6Nq.js";import"./chevron-down-Cnmtw8e6.js";import"./index-DxGtCk42.js";import"./error-DIEj2ztu.js";import"./BaseCbacBanner-BGXh1-EF.js";import"./makeExternalStore-C2juSaVb.js";import"./Tooltip-BRluqZVE.js";import"./PopoverPopup-wC024HyS.js";import"./debounce-Bxc3LUXI.js";import"./useOsdkClient-BRi0iGfs.js";import"./tick-DGqr-KEb.js";import"./DropdownField-BKcx8XSW.js";import"./isEqual-CHlDy3oh.js";import"./withOsdkMetrics-CP1M_ZfY.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
