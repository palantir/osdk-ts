import{j as i}from"./iframe-DlsSxhci.js";import{O as p}from"./object-table-CRAh95MC.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-afX7mkFC.js";import"./preload-helper-C-s1U77H.js";import"./Table-Bj0YMStq.js";import"./index-cP9eqqta.js";import"./Dialog-C5U6ZShk.js";import"./cross-C60t9tFZ.js";import"./svgIconContainer-DPjUtDUg.js";import"./useBaseUiId-C02HFIUM.js";import"./InternalBackdrop-DBknUb6w.js";import"./composite-H8SSz-ne.js";import"./index-cF6qZyvr.js";import"./index-DNVt94aI.js";import"./index-DpBvQz_i.js";import"./useEventCallback-B2uIvmto.js";import"./SkeletonBar-B0jE-NJT.js";import"./LoadingCell-C7YLxKY7.js";import"./ColumnConfigDialog-CWIAK8ug.js";import"./DraggableList-Cq1gBryW.js";import"./search-BqsY1PeE.js";import"./Input-Ci6C2hr-.js";import"./useControlled-Z7ZWa5VR.js";import"./isEqual-B8XloMG1.js";import"./isObject-BTVuOy-v.js";import"./Button-CxITngjL.js";import"./ActionButton-BWBcKq3A.js";import"./Checkbox-CQJt_NNw.js";import"./useValueChanged-B3zPCOA0.js";import"./CollapsiblePanel-B5uHCo3M.js";import"./MultiColumnSortDialog-BhSvpKv1.js";import"./MenuTrigger-BwFK0x6i.js";import"./CompositeItem-drMwpLA_.js";import"./ToolbarRootContext-vkAvhQwM.js";import"./getDisabledMountTransitionStyles-DMANXZME.js";import"./getPseudoElementBounds-CMsfWS6D.js";import"./chevron-down-DonJjnvl.js";import"./index-CBkUqlyA.js";import"./error-IK-rXp7z.js";import"./BaseCbacBanner-DhSKbTPU.js";import"./makeExternalStore-CH2NQdic.js";import"./Tooltip-DKzdlOiN.js";import"./PopoverPopup-NPYSC6zj.js";import"./toNumber-Co3sADDP.js";import"./useOsdkClient-Bz2RwTNu.js";import"./tick-2uq__bbs.js";import"./DropdownField-Bsph783u.js";import"./withOsdkMetrics-Bw6076Jo.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
