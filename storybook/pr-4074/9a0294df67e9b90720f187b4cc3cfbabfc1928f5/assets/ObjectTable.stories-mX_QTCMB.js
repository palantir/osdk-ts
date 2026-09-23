import{j as i}from"./iframe-BGhobRtu.js";import{O as p}from"./object-table-COtS4Qnz.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BefoDj5O.js";import"./preload-helper-pGzP1r6a.js";import"./Table-QJqNuUM-.js";import"./index-vtFPCgDX.js";import"./Dialog-BdhR34Gc.js";import"./cross-CuYz6VCw.js";import"./svgIconContainer-B7bAtHsS.js";import"./useBaseUiId-DQZ7iRRg.js";import"./InternalBackdrop-BuZZp4vX.js";import"./composite-N1fMxm4N.js";import"./index-qA_bivHa.js";import"./index-C0Y6HNv7.js";import"./index-4ZAX8LQC.js";import"./useEventCallback-IjK4E44x.js";import"./SkeletonBar-is7FW6bL.js";import"./LoadingCell-CAE1DLa0.js";import"./ColumnConfigDialog-CWqi8rZq.js";import"./DraggableList-U86vXP5Q.js";import"./search-CD-rabLl.js";import"./Input-C3PEeUtQ.js";import"./useControlled-Dp1hI4GV.js";import"./Button-DAz_khhf.js";import"./small-cross-sN4wSsnF.js";import"./ActionButton-CGHRv_-b.js";import"./Checkbox-aid0nh5t.js";import"./useValueChanged-COn_Wnb4.js";import"./CollapsiblePanel-DLLULbui.js";import"./MultiColumnSortDialog-R3tQGeIC.js";import"./MenuTrigger-BoRN7fZ3.js";import"./CompositeItem-C8P235hg.js";import"./ToolbarRootContext-DV_dajLa.js";import"./getDisabledMountTransitionStyles-DUpLtIxq.js";import"./getPseudoElementBounds-D0oEP3_T.js";import"./chevron-down-DAtIJVst.js";import"./index-EPx86zSw.js";import"./error-CFVPudD2.js";import"./BaseCbacBanner-CaTQcvxF.js";import"./makeExternalStore-Imo5q4ya.js";import"./Tooltip-DUd70Gw0.js";import"./PopoverPopup-uv4NdOtP.js";import"./debounce-ChAiSJEZ.js";import"./useOsdkClient-DzPyphix.js";import"./tick-CgJs5kuo.js";import"./DropdownField-DMnr6Z_R.js";import"./isEqual-JnfXh9I5.js";import"./withOsdkMetrics-qR-yFxPK.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
