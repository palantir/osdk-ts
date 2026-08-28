import{j as i}from"./iframe-VpGhx-PD.js";import{O as p}from"./object-table-DtjGPoWI.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CCS0-dTD.js";import"./preload-helper-D0pvWWR7.js";import"./Table-CU9oVga6.js";import"./index-LQdXBZRW.js";import"./Dialog-nYyvgKL6.js";import"./cross-MJ5oEJZb.js";import"./svgIconContainer-Y-YHGSaq.js";import"./useBaseUiId-BlzsEQEx.js";import"./InternalBackdrop-D0H6ieal.js";import"./composite-BCiYB9bI.js";import"./index-DjNDFA8y.js";import"./index-CrALdyEf.js";import"./index-BRt_pviF.js";import"./useEventCallback-Cwtfp8Vj.js";import"./SkeletonBar-C0UAbzOh.js";import"./LoadingCell-Bl504SLX.js";import"./ColumnConfigDialog-BvfmhfdQ.js";import"./DraggableList-DJXpCMPM.js";import"./search-CJ0NEjvE.js";import"./Input-wrleGgmB.js";import"./useControlled-DladVhMY.js";import"./Button-CWji_dY_.js";import"./small-cross-DvVUPBrn.js";import"./ActionButton-CDHs2jv5.js";import"./Checkbox-D6QYz9ye.js";import"./useValueChanged-DRiZRE6q.js";import"./CollapsiblePanel-CLdlKCxT.js";import"./MultiColumnSortDialog-DrdLet6l.js";import"./MenuTrigger-DhjGzQy0.js";import"./CompositeItem-30_Ebn6h.js";import"./ToolbarRootContext-KZFvKfVC.js";import"./getDisabledMountTransitionStyles-Bq_uSDtW.js";import"./getPseudoElementBounds-Cjq7O4KT.js";import"./chevron-down-Cq5P_lFy.js";import"./index-DjF-cwug.js";import"./error-CQRU8cCe.js";import"./BaseCbacBanner-qxye8Lsm.js";import"./makeExternalStore-GDtn0QFv.js";import"./Tooltip-BggaXucL.js";import"./PopoverPopup-CupUKI_F.js";import"./debounce-CDUQzIGp.js";import"./useOsdkClient-uiJUUrNk.js";import"./tick-DQnVpV1f.js";import"./DropdownField-B1Pz7wqj.js";import"./isEqual-DCl6ekOf.js";import"./withOsdkMetrics-nBBrWVXt.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
