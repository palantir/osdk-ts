import{j as i}from"./iframe-C35uGTor.js";import{O as p}from"./object-table-BMvG9R9k.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DdySQxJz.js";import"./preload-helper-F3EFc52l.js";import"./Table-SEATd5pV.js";import"./index-Dc24XYXq.js";import"./Dialog-Dq6arkge.js";import"./cross-C0_UaP8E.js";import"./svgIconContainer-BAWtvYDY.js";import"./useBaseUiId-D-k3osuz.js";import"./InternalBackdrop-Bs1cpNOT.js";import"./composite-C_6udYfh.js";import"./index-DRW9cQCp.js";import"./index-Dgf1QELO.js";import"./index-Ca4jpz09.js";import"./useEventCallback-Cf-0ooWK.js";import"./SkeletonBar-CPo4uDcQ.js";import"./LoadingCell-Cnax0wEX.js";import"./ColumnConfigDialog-BP1UEYm7.js";import"./DraggableList-Dr_uKQUn.js";import"./search-Omk4RfaQ.js";import"./Input-CtTyrSxh.js";import"./useControlled-jxUnEnFw.js";import"./Button-BAtng8PD.js";import"./small-cross-93J9MDZj.js";import"./ActionButton-DHb-zf9N.js";import"./Checkbox-v-LG2738.js";import"./useValueChanged-Cx6EL_oM.js";import"./CollapsiblePanel-sHrc_PW6.js";import"./MultiColumnSortDialog-vnZWR3AB.js";import"./MenuTrigger-9YjlyO6G.js";import"./CompositeItem-Cst7sX19.js";import"./ToolbarRootContext-Do8xptiZ.js";import"./getDisabledMountTransitionStyles-Cd_D1FIL.js";import"./getPseudoElementBounds-BSTYbltd.js";import"./chevron-down-CyTbMtgy.js";import"./index-CQ0b7fbb.js";import"./error-BP_tygeo.js";import"./BaseCbacBanner-CN7_0G8f.js";import"./makeExternalStore-ROa8cnCZ.js";import"./Tooltip-cI_3eo19.js";import"./PopoverPopup-BOg0baOJ.js";import"./debounce-Csr1B-r9.js";import"./useOsdkClient-DCbEGB5n.js";import"./tick-CP39Td_J.js";import"./DropdownField-DItTqqK3.js";import"./isEqual-BmCMSC_D.js";import"./withOsdkMetrics-BEBYlr-F.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
