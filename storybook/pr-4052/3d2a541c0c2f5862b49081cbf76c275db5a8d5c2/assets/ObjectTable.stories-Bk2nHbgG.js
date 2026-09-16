import{j as i}from"./iframe-Ca2h9Cb_.js";import{O as p}from"./object-table-Dmtv9nc1.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DvOJ6Bky.js";import"./preload-helper-DAf9eX-V.js";import"./Table-DXXOr3kR.js";import"./index-DWThxo2f.js";import"./Dialog-uKOxAzum.js";import"./cross-kbTjrbem.js";import"./svgIconContainer-Bn-48Fxt.js";import"./useBaseUiId-BeaWeUqC.js";import"./InternalBackdrop-DFUqPzG4.js";import"./composite-BHDhYMvG.js";import"./index-khJGmqWk.js";import"./index-BQgpEwzp.js";import"./index-DH2EreSc.js";import"./useEventCallback-Cy_0PmmR.js";import"./SkeletonBar-BXjaSTgH.js";import"./LoadingCell-iOD7qSli.js";import"./ColumnConfigDialog-H_qZCN29.js";import"./DraggableList-CyBumZSQ.js";import"./search-CuSTqVc7.js";import"./Input-DJ7coF_2.js";import"./useControlled-DgBClk7b.js";import"./Button-DuNKOwnz.js";import"./small-cross-CNAC6Gdk.js";import"./ActionButton-DHMmr5VF.js";import"./Checkbox-CNMBYUqX.js";import"./useValueChanged-ChMbBnhn.js";import"./CollapsiblePanel-XpP7JVfq.js";import"./MultiColumnSortDialog-RYKHJLmS.js";import"./MenuTrigger-CM62vP5e.js";import"./CompositeItem-Bm7sSUUb.js";import"./ToolbarRootContext-Dw75y5NP.js";import"./getDisabledMountTransitionStyles-DBV7Mlk2.js";import"./getPseudoElementBounds-vkG9JlGu.js";import"./chevron-down-BbQxi628.js";import"./index-HOlceD77.js";import"./error-JTYK1w6o.js";import"./BaseCbacBanner-CZE4AAf3.js";import"./makeExternalStore-Toi8vQS6.js";import"./Tooltip-6EC7drX-.js";import"./PopoverPopup-Dbmji2sV.js";import"./debounce-D2v1avI_.js";import"./useOsdkClient-CVjLcUiq.js";import"./tick-Db6JqMoI.js";import"./DropdownField-X-AMgcUu.js";import"./isEqual-DQpKrOAs.js";import"./withOsdkMetrics-BAX4qEws.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
