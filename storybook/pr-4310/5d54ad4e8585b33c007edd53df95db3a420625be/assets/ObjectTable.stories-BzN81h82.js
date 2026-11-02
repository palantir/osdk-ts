import{j as i}from"./iframe-C51H6UNa.js";import{O as p}from"./object-table-CMCoP_er.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-XW9ncGOV.js";import"./preload-helper-DPRquFXQ.js";import"./Table-CqaXJVut.js";import"./index-XgCK3bCN.js";import"./Dialog-wpYTwm5C.js";import"./cross-Da8aR7tr.js";import"./svgIconContainer-BcKhCUV6.js";import"./useBaseUiId-BO3VYUv8.js";import"./InternalBackdrop-D_glzBrd.js";import"./composite-BT7MKZYR.js";import"./index-DJOOHoWw.js";import"./index-Cf0yVo51.js";import"./index-DJa5-hKe.js";import"./useEventCallback-Dyoji95Y.js";import"./SkeletonBar-DSiG1Rwc.js";import"./LoadingCell-D4zJkyLc.js";import"./ColumnConfigDialog-DChNbv3p.js";import"./DraggableList-D-wOIbeh.js";import"./search-CUjniAIx.js";import"./Input-578UpJoR.js";import"./useControlled-CDSAxchT.js";import"./Button-BbdKgphf.js";import"./small-cross-Wl991iyC.js";import"./ActionButton-BFr5UQ2Z.js";import"./Checkbox-DFJuyNl9.js";import"./useValueChanged-BXBXo6ad.js";import"./CollapsiblePanel-C3NDAcsc.js";import"./MultiColumnSortDialog-BVUzWBvq.js";import"./MenuTrigger-BLAXBnUV.js";import"./CompositeItem-B83sK6r-.js";import"./ToolbarRootContext-Dquj6J6i.js";import"./getDisabledMountTransitionStyles-Cq4DahQq.js";import"./getPseudoElementBounds-CE1EUuF6.js";import"./chevron-down-CiXp0wUf.js";import"./index-BbCxoF0B.js";import"./error-BabcdKAa.js";import"./BaseCbacBanner-BPOTHcmy.js";import"./makeExternalStore-DINTZeIb.js";import"./Tooltip-BMyMoL9M.js";import"./PopoverPopup-CZx3Vhv9.js";import"./debounce-DxRcBaI1.js";import"./useOsdkClient-D8E3YhRa.js";import"./tick-obAEPBey.js";import"./DropdownField-BbfVhW4P.js";import"./isEqual-qdM32Mai.js";import"./withOsdkMetrics-55ZGkUds.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
