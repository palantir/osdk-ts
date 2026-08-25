import{j as i}from"./iframe-CaEl2eka.js";import{O as p}from"./object-table-DKAkJsj7.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bs43Za7t.js";import"./preload-helper-CKJhYclM.js";import"./Table-DdN_Fh96.js";import"./index-Dao3z4xN.js";import"./Dialog-CFabIcPb.js";import"./cross-w8xD3Kul.js";import"./svgIconContainer-BZS1llvH.js";import"./useBaseUiId-C6NCgBGS.js";import"./InternalBackdrop-y5HdDMK5.js";import"./composite-CDJBgnca.js";import"./index-B-jhfDuh.js";import"./index-BWzb8A31.js";import"./index-DpjF6j4z.js";import"./useEventCallback-DVl-nCUK.js";import"./SkeletonBar-Dqjmo54-.js";import"./LoadingCell-DeviUxoR.js";import"./ColumnConfigDialog-CWGHF6UC.js";import"./DraggableList-Cybt2ylu.js";import"./search-00eTLW-R.js";import"./Input-Dxv9-Vzq.js";import"./useControlled-DCzWHf0h.js";import"./Button-Bv8tSuuM.js";import"./small-cross-BccHwN_d.js";import"./ActionButton-DRREP_I-.js";import"./Checkbox-BkeEhxkZ.js";import"./useValueChanged-DVOjBH36.js";import"./CollapsiblePanel-bnEHpgLY.js";import"./MultiColumnSortDialog-aAuNMXh8.js";import"./MenuTrigger-CjdtjAZl.js";import"./CompositeItem-_nl0E7_8.js";import"./ToolbarRootContext--ihq9xQk.js";import"./getDisabledMountTransitionStyles-DV07XhqX.js";import"./getPseudoElementBounds-qU76zSTh.js";import"./chevron-down-CoZ1s0t9.js";import"./index-DaKhz2zi.js";import"./error-Zn5rVwYN.js";import"./BaseCbacBanner-DUtgprEg.js";import"./makeExternalStore-CmUF4kPq.js";import"./Tooltip-D6YR40Tf.js";import"./PopoverPopup-5RMFkOP8.js";import"./debounce-DgOaRStr.js";import"./useOsdkClient-aeU6oKDe.js";import"./tick-91iRYN-3.js";import"./DropdownField-C01HlXsj.js";import"./isEqual-RjQDL3k6.js";import"./withOsdkMetrics-B62KTojI.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
