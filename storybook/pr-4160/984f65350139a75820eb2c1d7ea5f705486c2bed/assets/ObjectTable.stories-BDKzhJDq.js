import{j as i}from"./iframe-B7lh4g6p.js";import{O as p}from"./object-table-Bkm9lh3W.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bt9y5bH-.js";import"./preload-helper-Bs-nMSmN.js";import"./Table-B_46x3FM.js";import"./index-DEvGhliI.js";import"./Dialog-BzopL0Vi.js";import"./cross-BYT7TYIn.js";import"./svgIconContainer-BNlhaeSZ.js";import"./useBaseUiId-Bb1FrUqT.js";import"./InternalBackdrop-D0lSPPfD.js";import"./composite-Dkx2J5ep.js";import"./index-DhDUpT6q.js";import"./index-DPe8iSwh.js";import"./index-DsIDLdue.js";import"./useEventCallback-CqT8udWU.js";import"./SkeletonBar-BnnPCVvc.js";import"./LoadingCell-DL0oq-Y1.js";import"./ColumnConfigDialog-OUdG8yLN.js";import"./DraggableList-GejUIgG3.js";import"./search-LFDcG9Bw.js";import"./Input-Cv8mC2jD.js";import"./useControlled-CPKeQZ_f.js";import"./Button-Cdt1t7O2.js";import"./small-cross-Q4Mn0c4O.js";import"./ActionButton-vOzY96R-.js";import"./Checkbox-CGscG7J1.js";import"./useValueChanged-BwX_swTd.js";import"./CollapsiblePanel-CSh4ea_Q.js";import"./MultiColumnSortDialog-QKJ7omg5.js";import"./MenuTrigger-BaFbYHCc.js";import"./CompositeItem-DtBwKtoa.js";import"./ToolbarRootContext-oEsqExNC.js";import"./getDisabledMountTransitionStyles-DT79YMLS.js";import"./getPseudoElementBounds-C8FT8HZf.js";import"./chevron-down-B2xEAqn8.js";import"./index-D2-d5N75.js";import"./error-CTtfffuQ.js";import"./BaseCbacBanner-Bm92q348.js";import"./makeExternalStore-DqOv6fSv.js";import"./Tooltip-i5Zb1xth.js";import"./PopoverPopup-BdiLEXnM.js";import"./debounce-BwLH3R9O.js";import"./useOsdkClient-C1-7Io4T.js";import"./tick-xBqsThOV.js";import"./DropdownField-heO63W5v.js";import"./isEqual-B2jZ4Prp.js";import"./withOsdkMetrics-FDsqzYBW.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
