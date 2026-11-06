import{j as i}from"./iframe-wBrbDET_.js";import{O as p}from"./object-table-l-msv8K7.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CE9QQVYF.js";import"./preload-helper-DyV1jABv.js";import"./Table-CKmvMShT.js";import"./index-Ncx2k3s4.js";import"./Dialog-AssY6Vhe.js";import"./cross-Df39fOvA.js";import"./svgIconContainer-Ct8cN05_.js";import"./useBaseUiId-eK3I3qsA.js";import"./InternalBackdrop-DejoUS48.js";import"./composite-SIfyViZe.js";import"./index-CHgCkFBn.js";import"./index-CmelBQvM.js";import"./index-D0qJZt22.js";import"./useEventCallback-CqTheTWA.js";import"./SkeletonBar-DyKvxgvp.js";import"./LoadingCell-Astirh1i.js";import"./ColumnConfigDialog-CmwFbY1V.js";import"./DraggableList-DQXh0Mtt.js";import"./search-CoFWb8gE.js";import"./Input-DFbvIuq-.js";import"./useControlled-2_Rn_F3e.js";import"./Button-DtJK54aF.js";import"./small-cross-Dckp6UXX.js";import"./ActionButton-DFvb9baL.js";import"./Checkbox-DSytaUdj.js";import"./useValueChanged-FeK06T4Y.js";import"./CollapsiblePanel-C3k19iJ9.js";import"./MultiColumnSortDialog-DcXb52ih.js";import"./MenuTrigger-D1Zl5Oyi.js";import"./CompositeItem-BNWpWAX_.js";import"./ToolbarRootContext-BxvlpQpy.js";import"./getDisabledMountTransitionStyles-tFuKCJy7.js";import"./getPseudoElementBounds-DXS1RVbT.js";import"./chevron-down-Dz6vupYI.js";import"./index-_TwhdO3w.js";import"./error-lMxpxIBb.js";import"./BaseCbacBanner-DAoL7TRO.js";import"./makeExternalStore-gYwFGl5I.js";import"./Tooltip-sYOln3gS.js";import"./PopoverPopup-B9ZQX_rh.js";import"./debounce-WlMj0UwE.js";import"./useOsdkClient-b3KRZKG8.js";import"./tick-DBtGJBOW.js";import"./DropdownField-zauvOy2L.js";import"./isEqual-DHHl8BCh.js";import"./withOsdkMetrics-mhV8EPst.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
