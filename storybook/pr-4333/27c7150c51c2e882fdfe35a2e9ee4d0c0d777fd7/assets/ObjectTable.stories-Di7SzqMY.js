import{j as i}from"./iframe-DfZQ9M6i.js";import{O as p}from"./object-table-BABzrNHh.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CkhPDZVV.js";import"./preload-helper-E2urLAES.js";import"./Table-Bg05vyrB.js";import"./index-B0k0bEti.js";import"./Dialog-D-zHP0iR.js";import"./cross-BioDKNkS.js";import"./svgIconContainer-eylyBn5f.js";import"./useBaseUiId-Chm1jq62.js";import"./InternalBackdrop-vRXRm5Ri.js";import"./composite-C2Pj8gPK.js";import"./index-DMZF7jCE.js";import"./index-DLq5Bkcx.js";import"./index-BrA1DhLb.js";import"./useEventCallback-CuX5Jevb.js";import"./SkeletonBar-xgByqOHn.js";import"./LoadingCell-I-rE57sz.js";import"./ColumnConfigDialog-1IK2KiyF.js";import"./DraggableList-CdDP_B-e.js";import"./search-g1T2rl--.js";import"./Input-CYJZLefv.js";import"./useControlled-CftsWT9B.js";import"./Button-B2R87CaB.js";import"./small-cross-DlqkxE_Y.js";import"./ActionButton-DWlru8XN.js";import"./Checkbox-Cu7Fqy3D.js";import"./useValueChanged-BssawWRm.js";import"./CollapsiblePanel-DfOA0fLb.js";import"./MultiColumnSortDialog-CzIRJYTz.js";import"./MenuTrigger-CSm448TL.js";import"./CompositeItem-Hd7LuzxE.js";import"./ToolbarRootContext-CfFBsMXS.js";import"./getDisabledMountTransitionStyles-CSW-SIFW.js";import"./getPseudoElementBounds-C9x04IRz.js";import"./chevron-down-tsxmIRBn.js";import"./index-kN-BpEU5.js";import"./error-BTFoLABS.js";import"./BaseCbacBanner-qA1XbymC.js";import"./makeExternalStore-ChnBYuE7.js";import"./Tooltip-BJ0dhB1V.js";import"./PopoverPopup-BcGfAJQo.js";import"./debounce-BFxxFhvU.js";import"./useOsdkClient-BVS0pOON.js";import"./tick-BTiK-OOO.js";import"./DropdownField-cD4Mi-ZJ.js";import"./isEqual-r-L37Ccs.js";import"./withOsdkMetrics-lGVwuAms.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
