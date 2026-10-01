import{j as i}from"./iframe-D555MuJ0.js";import{O as p}from"./object-table-C02Hy59p.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B4UldRmv.js";import"./preload-helper-DI0YqJp4.js";import"./Table-BtXxIuTu.js";import"./index-Cg9uHUun.js";import"./Dialog-DAOQ-pdw.js";import"./cross-IYmx4x0m.js";import"./svgIconContainer-bAOTCoFN.js";import"./useBaseUiId-B4R9GsGS.js";import"./InternalBackdrop-D0WzfKwV.js";import"./composite-C3jNveZb.js";import"./index-CkTsdOkp.js";import"./index-BVyJBQqR.js";import"./index-BOqKZcef.js";import"./useEventCallback-C_68HPnA.js";import"./SkeletonBar-CDnvbMD_.js";import"./LoadingCell-ZbJVUXNh.js";import"./ColumnConfigDialog-DgJJ0HXo.js";import"./DraggableList-CpUYUtRA.js";import"./search-B-aW4zGh.js";import"./Input-CueXhQ4V.js";import"./useControlled-BXEwoD5-.js";import"./Button-B8XR24zN.js";import"./small-cross-DYYtvTQk.js";import"./ActionButton-P4ce0KZA.js";import"./Checkbox-DrgB9DWr.js";import"./useValueChanged-DoyhwWSp.js";import"./CollapsiblePanel-DiuaiCTg.js";import"./MultiColumnSortDialog-BkHFTNzA.js";import"./MenuTrigger-CDNFD1b5.js";import"./CompositeItem-B5t7ZVS0.js";import"./ToolbarRootContext-B_tLpux3.js";import"./getDisabledMountTransitionStyles-NNQg5thc.js";import"./getPseudoElementBounds-DkB34pum.js";import"./chevron-down-CJd6fkFq.js";import"./index-C8_vB7gu.js";import"./error-DVePqkqY.js";import"./BaseCbacBanner-BsU6b_xT.js";import"./makeExternalStore-BcjkXJ5O.js";import"./Tooltip-Bxzu-pAW.js";import"./PopoverPopup-w0tQerBi.js";import"./debounce-7vABva-v.js";import"./useOsdkClient-BRTJpYwY.js";import"./tick-Dx26yCkG.js";import"./DropdownField-DRorYhAL.js";import"./isEqual-BGCP9pRy.js";import"./withOsdkMetrics-Bbt3lTlO.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
