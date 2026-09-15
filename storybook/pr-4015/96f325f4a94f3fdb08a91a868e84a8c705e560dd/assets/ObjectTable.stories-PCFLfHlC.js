import{j as i}from"./iframe-Dv4QQ6Y4.js";import{O as p}from"./object-table-C1SCK71K.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BR699g4Q.js";import"./preload-helper-BZeo2aa_.js";import"./Table-DCAi-cqE.js";import"./index-Bo5vUrye.js";import"./Dialog-CI9eTel7.js";import"./cross-CTXbroJK.js";import"./svgIconContainer-De6SA4Dr.js";import"./useBaseUiId-DPM9QPEL.js";import"./InternalBackdrop-DRaUyJ8v.js";import"./composite-D2e8WeVr.js";import"./index-D7zPEcZE.js";import"./index-wUCDkndP.js";import"./index-B4wl8HiA.js";import"./useEventCallback-DE28hwwS.js";import"./SkeletonBar-DbWunkuZ.js";import"./LoadingCell-Cyjm6LXt.js";import"./ColumnConfigDialog-BoudTuK3.js";import"./DraggableList-DKQpzmfW.js";import"./search-CWgR1vVP.js";import"./Input-DTNwj_yO.js";import"./useControlled-BcGMXD3D.js";import"./Button-B_X3_bQA.js";import"./small-cross-BOwPxFN0.js";import"./ActionButton-C1ptiifp.js";import"./Checkbox-BhB2wpJV.js";import"./useValueChanged-1zfYKsDL.js";import"./CollapsiblePanel-DNTWrgGT.js";import"./MultiColumnSortDialog-2kScV4zV.js";import"./MenuTrigger-CbxBQ7TZ.js";import"./CompositeItem-b4hZwQ2E.js";import"./ToolbarRootContext-Blue4JH4.js";import"./getDisabledMountTransitionStyles-n1IP7gt4.js";import"./getPseudoElementBounds-DmVA_fGG.js";import"./chevron-down-XPf4kqix.js";import"./index-X99WJuZn.js";import"./error-CMA_8Zv0.js";import"./BaseCbacBanner-DyBJvF4a.js";import"./makeExternalStore-Bg3zd0w-.js";import"./Tooltip-DSVMTHzP.js";import"./PopoverPopup-4H23XaH2.js";import"./debounce-DMjYGfU6.js";import"./useOsdkClient-BE_-nJBB.js";import"./tick-Dh2x96zi.js";import"./DropdownField-kkZO0YX5.js";import"./isEqual-DrxdPr0P.js";import"./withOsdkMetrics-CfzcCH1M.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
