import{j as i}from"./iframe-DJkts_RL.js";import{O as p}from"./object-table-El6ZJtdS.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-i7vkY5Yb.js";import"./preload-helper-DnSYvyfS.js";import"./Table-CkcyUqQ4.js";import"./index-AdNwtOlb.js";import"./Dialog-C5jCL8Mx.js";import"./cross-RIukJOv6.js";import"./svgIconContainer-C5-52KFN.js";import"./useBaseUiId-BOJH0vIf.js";import"./InternalBackdrop-D5KetDnt.js";import"./composite-DDvCjav2.js";import"./index-Ci2eYgLO.js";import"./index-BDcDuz1j.js";import"./index-CQxVkwph.js";import"./useEventCallback-lKoyoV4u.js";import"./SkeletonBar-BvqjdvM1.js";import"./LoadingCell-CjZbM9If.js";import"./ColumnConfigDialog-DAZT9Gdl.js";import"./DraggableList-CD_o0Imw.js";import"./search-_QUQf3i5.js";import"./Input-FCTts1k3.js";import"./useControlled-DasQvtmr.js";import"./Button-sRivSwhn.js";import"./small-cross-CVWWEP0y.js";import"./ActionButton-VwPGUJzv.js";import"./Checkbox-DYlpQOH7.js";import"./useValueChanged-CZGvPtYp.js";import"./CollapsiblePanel-iUKB7uZT.js";import"./MultiColumnSortDialog-Dp7hOvd-.js";import"./MenuTrigger-CjrvOlSn.js";import"./CompositeItem-LGAP8V9B.js";import"./ToolbarRootContext-DzjIN-OH.js";import"./getDisabledMountTransitionStyles-BYybRfax.js";import"./getPseudoElementBounds-CzOa17qB.js";import"./chevron-down-DB2rAp0-.js";import"./index-CUwadNBX.js";import"./error-BqILnzwq.js";import"./BaseCbacBanner-DO50Ydj3.js";import"./makeExternalStore-phk9_3eu.js";import"./Tooltip-C3bMyjLM.js";import"./isObject-pPVUn46w.js";import"./debounce-CsNmpAAZ.js";import"./useOsdkClient-CytKAX8u.js";import"./tick-Bn4wwjz-.js";import"./DropdownField-CG-CwPna.js";import"./isEqual-BRzVBIIh.js";import"./_baseIsEqual-BfrWjv7z.js";import"./withOsdkMetrics-BoDHZnfJ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
