import{j as i}from"./iframe-BIj6bFPD.js";import{O as p}from"./object-table-DbiEHEtX.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B4VSGvXe.js";import"./preload-helper-CnFW70BH.js";import"./Table-Cl5RC9Dy.js";import"./index-EzVNlF2P.js";import"./Dialog-DU8IN4It.js";import"./cross-CIvbz3fr.js";import"./svgIconContainer-DL-G0QrC.js";import"./useBaseUiId-DVJNGTFF.js";import"./InternalBackdrop-DxOsgfPJ.js";import"./composite-COFb-sDn.js";import"./index-Cbfdor1M.js";import"./index-DhR718jz.js";import"./index-6zRHdDey.js";import"./useEventCallback-tYIYtrHJ.js";import"./SkeletonBar-DH9VYcWT.js";import"./LoadingCell-Dt98umfs.js";import"./ColumnConfigDialog-Bu43fLwi.js";import"./DraggableList-DO4yU3as.js";import"./search-BeRqVnC2.js";import"./Input-DlOQmL8-.js";import"./useControlled-J3hwkrOU.js";import"./isEqual-BRtcnRU9.js";import"./isObject-CXKkwPCq.js";import"./Button-BGebXm9d.js";import"./ActionButton-Xfr9hThM.js";import"./Checkbox-CJqKBJ8t.js";import"./useValueChanged-CsS6AYiu.js";import"./CollapsiblePanel-B1b8w9ck.js";import"./MultiColumnSortDialog-BqGwcs90.js";import"./MenuTrigger-DMKts1uV.js";import"./CompositeItem-BCndZLGz.js";import"./ToolbarRootContext-CUP1TrgR.js";import"./getDisabledMountTransitionStyles-BMBUc-yd.js";import"./getPseudoElementBounds-senjx62T.js";import"./chevron-down-BrYXFGIg.js";import"./index-dkrXtuUJ.js";import"./error-DibXa5zr.js";import"./BaseCbacBanner-BBfv4xvp.js";import"./makeExternalStore-DDikwGdp.js";import"./Tooltip-BuEsOcB2.js";import"./PopoverPopup-B43QKyOO.js";import"./toNumber-D55U6XTD.js";import"./useOsdkClient-BTO9c-w9.js";import"./tick-uEmvjTqW.js";import"./DropdownField-2-yUUqef.js";import"./withOsdkMetrics-Mx1JK8yZ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
