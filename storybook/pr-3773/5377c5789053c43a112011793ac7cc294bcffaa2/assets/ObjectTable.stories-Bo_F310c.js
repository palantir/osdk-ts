import{j as i}from"./iframe-BLnZQotn.js";import{O as p}from"./object-table-6c5WKZhP.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D0Ksm3xh.js";import"./preload-helper-DY9jpKUC.js";import"./Table-CP37JA88.js";import"./index-Br-sIVdK.js";import"./Dialog-B5z5pO7l.js";import"./cross-DScBbaG7.js";import"./svgIconContainer-4F-xtBaI.js";import"./useBaseUiId-mj7-YtUe.js";import"./InternalBackdrop-CJr0HIhe.js";import"./composite-BKQJBcnd.js";import"./index-B4OHcS41.js";import"./index-CZctS6MH.js";import"./index-5J9Ixf7O.js";import"./useEventCallback-DVmZABpv.js";import"./SkeletonBar-CkYIhZj8.js";import"./LoadingCell-CEWp7KDY.js";import"./ColumnConfigDialog-FpkupR4C.js";import"./DraggableList-DoR-tyVI.js";import"./search-XfyocaRu.js";import"./Input-BhzFnYGF.js";import"./useControlled-B6GUHUJM.js";import"./isEqual-CJHtwtni.js";import"./isObject-DLfBK2wg.js";import"./Button-BjgeWM_v.js";import"./ActionButton-D7Hs2uzo.js";import"./Checkbox-Cp9nxQ9c.js";import"./useValueChanged-EgQsYI_U.js";import"./CollapsiblePanel-BGeZbD5J.js";import"./MultiColumnSortDialog-4OOdrMWk.js";import"./MenuTrigger-V8m45X6w.js";import"./CompositeItem-DzcXIyhE.js";import"./ToolbarRootContext-C8cCGqF-.js";import"./getDisabledMountTransitionStyles-NJQ99kiK.js";import"./getPseudoElementBounds-D5Sm8-XT.js";import"./chevron-down-h1RtSMOg.js";import"./index-DFPaFGKs.js";import"./error-BjkGAX5r.js";import"./BaseCbacBanner-DRS4U5eU.js";import"./makeExternalStore-eh1oPVcU.js";import"./Tooltip-CxPTLfXU.js";import"./PopoverPopup-Ch34ozz9.js";import"./toNumber-Dx2WSPnF.js";import"./useOsdkClient-BizZoOjd.js";import"./tick-ErOtw_Kk.js";import"./DropdownField-yIY6syyK.js";import"./withOsdkMetrics-DPb2-OHp.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
