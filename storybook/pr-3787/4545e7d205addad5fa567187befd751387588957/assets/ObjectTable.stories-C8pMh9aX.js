import{j as i}from"./iframe-B0NustTp.js";import{O as p}from"./object-table-CpOACIfS.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Ch9_YDz4.js";import"./preload-helper-D4xsKj5c.js";import"./Table-Dngre3Mp.js";import"./index-DOiiFchC.js";import"./Dialog-pKUPB7lj.js";import"./cross-CEKjUhQ8.js";import"./svgIconContainer-CQZXj9xe.js";import"./useBaseUiId-B_TDEKwC.js";import"./InternalBackdrop-gNpxJOls.js";import"./composite-C2jjYn_P.js";import"./index-Coc0zFCs.js";import"./index-Bmw4N7qN.js";import"./index-BOapOVcJ.js";import"./useEventCallback-C1UfN3c0.js";import"./SkeletonBar-D-eBex8a.js";import"./LoadingCell-B25SV7uj.js";import"./ColumnConfigDialog-Dh6Or5Xn.js";import"./DraggableList-CfyNkyex.js";import"./search-DXHhLrb0.js";import"./Input-DcsvwHOE.js";import"./useControlled-CLhhg_Fr.js";import"./isEqual-BScB_ut0.js";import"./isObject-CGVzGjp9.js";import"./Button-CJxqsXBF.js";import"./ActionButton-hgrjU-94.js";import"./Checkbox-CoEmBael.js";import"./useValueChanged-tZnZZkJ5.js";import"./CollapsiblePanel-B_IVgKA_.js";import"./MultiColumnSortDialog-Bc89SxU8.js";import"./MenuTrigger-CCG3EJZU.js";import"./CompositeItem-D6h2F2k9.js";import"./ToolbarRootContext-jsU1d9Wb.js";import"./getDisabledMountTransitionStyles-BTOFa9ac.js";import"./getPseudoElementBounds-CnUhEVKz.js";import"./chevron-down-TEcuG9YK.js";import"./index-B_huBhV_.js";import"./error-CAUo2CNB.js";import"./BaseCbacBanner-COfmPXcb.js";import"./makeExternalStore-G48Ly8TF.js";import"./Tooltip-DvNEqzAy.js";import"./PopoverPopup-C8XVSsho.js";import"./toNumber-N05UxMUO.js";import"./useOsdkClient-Do6CKeml.js";import"./tick-D3zzyNoI.js";import"./DropdownField-Dnqb6MRw.js";import"./withOsdkMetrics-BPDf5M2B.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
