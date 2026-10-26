import{j as i}from"./iframe-I-oDj4Zf.js";import{O as p}from"./object-table-BDzyk2ws.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dq8aHjVx.js";import"./preload-helper-DoR3GGZy.js";import"./Table-BbncEI9K.js";import"./index-QR0ynjTm.js";import"./Dialog-DqQkO56R.js";import"./cross-CX2gEjus.js";import"./svgIconContainer-BrWiwUny.js";import"./useBaseUiId-DbsMUGHz.js";import"./InternalBackdrop-CfSb4ma1.js";import"./composite-CVLqeN_f.js";import"./index-D2sLcc-K.js";import"./index-CPedUlI1.js";import"./index-DpMDyn81.js";import"./useEventCallback-Bc6J5k71.js";import"./SkeletonBar-CGYOp5T6.js";import"./LoadingCell-BoayzotZ.js";import"./ColumnConfigDialog-D2jY4VLY.js";import"./DraggableList-LDR0wrNb.js";import"./search-CIYeg_xA.js";import"./Input-QRcBEz-L.js";import"./useControlled-CphiSNJu.js";import"./Button-DZTSIR38.js";import"./small-cross-D7PZgAK5.js";import"./ActionButton-C-BKMT4N.js";import"./Checkbox-C0EGJ27n.js";import"./useValueChanged-CiTYSghQ.js";import"./CollapsiblePanel-BGlZd1qK.js";import"./MultiColumnSortDialog-Cn0wU-xj.js";import"./MenuTrigger-DMkgApeK.js";import"./CompositeItem-Bh0NB-Cc.js";import"./ToolbarRootContext-DOAo9bSD.js";import"./getDisabledMountTransitionStyles-yOgeaO0s.js";import"./getPseudoElementBounds-Cs3Xa3sB.js";import"./chevron-down-DsdifgPL.js";import"./index-COac3hDI.js";import"./error-DQf4Jva_.js";import"./BaseCbacBanner-PQFEbr0C.js";import"./makeExternalStore-DSBRYZ6v.js";import"./Tooltip-DkmWZB-H.js";import"./PopoverPopup-D4Yb-OFT.js";import"./debounce-D5e0wjoa.js";import"./useOsdkClient-CEoxI4QC.js";import"./tick-BrOwqOvA.js";import"./DropdownField-I4HAtEDY.js";import"./isEqual-CssyDgHr.js";import"./withOsdkMetrics-CzZMIy3-.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
