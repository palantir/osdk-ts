import{j as i}from"./iframe-CBNJ8HWE.js";import{O as p}from"./object-table-BBZlajVP.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-YuVO3HOK.js";import"./preload-helper-D-aeZqn2.js";import"./Table-DjX4DPHX.js";import"./index-Dae7Nrzr.js";import"./Dialog-DOEzaE5N.js";import"./cross-IIpRFnCv.js";import"./svgIconContainer-Cmsji56X.js";import"./useBaseUiId-OM3pRXHK.js";import"./InternalBackdrop-CpbO4ilr.js";import"./composite-DVVFhOLL.js";import"./index-BDSNEOy8.js";import"./index-BbBV-ipX.js";import"./index-BXIyua5V.js";import"./useEventCallback-CnH-PQd4.js";import"./SkeletonBar-BAwTWyeA.js";import"./LoadingCell-CjTFe9b2.js";import"./ColumnConfigDialog-DDnC4bH4.js";import"./DraggableList-ClGArlOQ.js";import"./search-ctIWqbIr.js";import"./Input-j-S77mRt.js";import"./useControlled-BpsS1h83.js";import"./Button-nKcb30G0.js";import"./small-cross-uu7GABB3.js";import"./ActionButton-BFsA5ZAh.js";import"./Checkbox-IvoIoBvd.js";import"./useValueChanged-B6AjTcH0.js";import"./CollapsiblePanel-NQPBhepg.js";import"./MultiColumnSortDialog-DCak3p9n.js";import"./MenuTrigger-oVuzN-Jo.js";import"./CompositeItem-CFJInvfd.js";import"./ToolbarRootContext-DGgj03xf.js";import"./getDisabledMountTransitionStyles-Dq0tUHT-.js";import"./getPseudoElementBounds-BkaQV1Oc.js";import"./chevron-down-Df7Rgxm0.js";import"./index-Dre4GzRs.js";import"./error-CtfkQOQ0.js";import"./BaseCbacBanner-D4Wg3syd.js";import"./makeExternalStore-BJGSOQw4.js";import"./Tooltip-urAvcjFd.js";import"./PopoverPopup-DbRag64C.js";import"./debounce-DK-9Ersu.js";import"./useOsdkClient-D0-D6lZc.js";import"./tick-sVfQea33.js";import"./DropdownField-Xxjx_nIV.js";import"./isEqual-C3NiMB5-.js";import"./withOsdkMetrics-CqZNs336.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
