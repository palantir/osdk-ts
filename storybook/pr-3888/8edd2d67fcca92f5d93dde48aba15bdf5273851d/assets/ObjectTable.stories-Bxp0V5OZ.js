import{j as i}from"./iframe-DQJqbOkg.js";import{O as p}from"./object-table-C42cD1W9.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Ba1GFZzX.js";import"./preload-helper-Bx382jd8.js";import"./Table-BUKSbL-S.js";import"./index-DDju5qND.js";import"./Dialog-BvZa6S-z.js";import"./cross-CBKiDiFM.js";import"./svgIconContainer-Dh-If8bk.js";import"./useBaseUiId-Cd3DALKZ.js";import"./InternalBackdrop-CyA0gD-i.js";import"./composite-DJx5EpfC.js";import"./index-DcZTfGla.js";import"./index-BykRpjW_.js";import"./index-Bfev5bb1.js";import"./useEventCallback-9HlASw1I.js";import"./SkeletonBar-Cp-aCJOp.js";import"./LoadingCell-BmL71oDn.js";import"./ColumnConfigDialog-PodIpnSt.js";import"./DraggableList-uPaACmur.js";import"./search-BNWaEN5a.js";import"./Input-DfLnd1PA.js";import"./useControlled-B7roseIi.js";import"./Button-BsBGFSm4.js";import"./small-cross-CejGNC_3.js";import"./ActionButton-C4DfXQxH.js";import"./Checkbox-CFiLEo_f.js";import"./useValueChanged-CXcqZkjl.js";import"./CollapsiblePanel-BqmcF9l-.js";import"./MultiColumnSortDialog-NC9pVnrh.js";import"./MenuTrigger-VbMNUulM.js";import"./CompositeItem-DiI8zPAV.js";import"./ToolbarRootContext-QT_ZGINr.js";import"./getDisabledMountTransitionStyles-Cdyen_86.js";import"./getPseudoElementBounds-CTw6d2gi.js";import"./chevron-down-B4870N35.js";import"./index-BRXV0LIo.js";import"./error-BPF4Md4s.js";import"./BaseCbacBanner-BF9_Hyqe.js";import"./makeExternalStore-mpHw7kxu.js";import"./Tooltip-B_fuddTn.js";import"./PopoverPopup-CtZRJF9a.js";import"./debounce-s5XAQu68.js";import"./useOsdkClient-Buf3pzB5.js";import"./tick-Dvoh1BGs.js";import"./DropdownField-B4gCR3Np.js";import"./isEqual-DQglmP2C.js";import"./withOsdkMetrics-q_Jd76KJ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
