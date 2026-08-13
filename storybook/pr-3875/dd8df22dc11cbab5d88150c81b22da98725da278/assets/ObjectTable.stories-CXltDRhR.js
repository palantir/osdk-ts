import{j as i}from"./iframe-EEz1IOka.js";import{O as p}from"./object-table-CO-dI1YL.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-TPk0z3s-.js";import"./preload-helper-CGhdtBtK.js";import"./Table-Nb1wMyLG.js";import"./index-wrVUERdf.js";import"./Dialog-CdMREMdv.js";import"./cross-CuMKbR8C.js";import"./svgIconContainer-lS5adnyJ.js";import"./useBaseUiId-CcQzYqcN.js";import"./InternalBackdrop-CiT9C5YL.js";import"./composite-hdmoU3rn.js";import"./index-BPya6wgz.js";import"./index-QBb9cK5I.js";import"./index-d7XO9Jvc.js";import"./useEventCallback-OJPdi0UX.js";import"./SkeletonBar-CWSkqZVB.js";import"./LoadingCell-Do3U3EH_.js";import"./ColumnConfigDialog-CTxL14WK.js";import"./DraggableList-BIGxBb_L.js";import"./search-BsnNci57.js";import"./Input-BvlDQZSp.js";import"./useControlled-g6qmFj-Q.js";import"./Button-BPpqCEih.js";import"./small-cross-DBDElo7h.js";import"./ActionButton-Dyjj8Yw9.js";import"./Checkbox-Co5NuAj9.js";import"./useValueChanged-tJQ3ZVA6.js";import"./CollapsiblePanel-CXyIEon4.js";import"./MultiColumnSortDialog-rOcF0jIF.js";import"./MenuTrigger-D3KaQYoW.js";import"./CompositeItem-C527w4Jh.js";import"./ToolbarRootContext-b0NW8oaj.js";import"./getDisabledMountTransitionStyles-CtThYJal.js";import"./getPseudoElementBounds-CR7mFHCF.js";import"./chevron-down-C5I-Kczg.js";import"./index-Ex8GKG8s.js";import"./error-CU68iUeI.js";import"./BaseCbacBanner-Cf-Kmruf.js";import"./makeExternalStore-DZf_gtwe.js";import"./Tooltip-Bj3rH3YW.js";import"./PopoverPopup-Yd-OBux3.js";import"./debounce-BeoBCM9a.js";import"./useOsdkClient-ixOA3R4P.js";import"./tick-BwOA0alU.js";import"./DropdownField-BwsQHkj4.js";import"./isEqual-sRagOQoU.js";import"./withOsdkMetrics-DuSdcNfN.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
