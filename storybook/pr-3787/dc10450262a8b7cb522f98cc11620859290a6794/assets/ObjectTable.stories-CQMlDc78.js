import{j as i}from"./iframe-BG7t1Vmm.js";import{O as p}from"./object-table-DFpXDM8M.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-p1vVkGDs.js";import"./preload-helper-CP3oW2I4.js";import"./Table--GLSXPLI.js";import"./index-DNP-skbR.js";import"./Dialog-DTrAedIt.js";import"./cross-BgA3bxZe.js";import"./svgIconContainer-DoguVSwu.js";import"./useBaseUiId-wOo7_51r.js";import"./InternalBackdrop-BiHDr4V5.js";import"./composite-DjXoYun8.js";import"./index-D5aAagqo.js";import"./index-LP8SaJdm.js";import"./index-A9LJMqxv.js";import"./useEventCallback-Ch6qzy9f.js";import"./SkeletonBar-D0Pxt7og.js";import"./LoadingCell-Bbt2qYmw.js";import"./ColumnConfigDialog-Cv66BDCK.js";import"./DraggableList-BjjXT586.js";import"./search-DYV4c-c-.js";import"./Input-BtDQA_93.js";import"./useControlled-cqUbBSR9.js";import"./isEqual-wNmYYaDL.js";import"./isObject-CJDIddOi.js";import"./Button-BpJLAHN7.js";import"./ActionButton-Dw8p_eY5.js";import"./Checkbox-CNimbRhQ.js";import"./useValueChanged-C_YCjO-X.js";import"./CollapsiblePanel-FNzStr2Q.js";import"./MultiColumnSortDialog--I9uRdb-.js";import"./MenuTrigger-DfrtwaAO.js";import"./CompositeItem-BOvhxDt7.js";import"./ToolbarRootContext-DHIMXwmc.js";import"./getDisabledMountTransitionStyles-BTLZi8_p.js";import"./getPseudoElementBounds-Dut9ouvk.js";import"./chevron-down-Dlge6__9.js";import"./index-QQ1acmH5.js";import"./error-CU6tir3a.js";import"./BaseCbacBanner-CWaSrEh7.js";import"./makeExternalStore-DKKDnTU0.js";import"./Tooltip-Blfk8emT.js";import"./PopoverPopup-GnZ1840G.js";import"./toNumber-CAT65hVE.js";import"./useOsdkClient-B_eLt-9e.js";import"./tick-By8u8Fyi.js";import"./DropdownField-Bj1ah8mC.js";import"./withOsdkMetrics-DPDNp8Fq.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
