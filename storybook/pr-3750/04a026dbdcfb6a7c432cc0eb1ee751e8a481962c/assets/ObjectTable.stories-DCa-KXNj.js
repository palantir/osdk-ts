import{j as i}from"./iframe-DuxpSVeu.js";import{O as p}from"./object-table-C939L43N.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BPn8uhKv.js";import"./preload-helper-CVqn3HQv.js";import"./Table-DjLwXHQc.js";import"./index-Dbf3XMP5.js";import"./Dialog-DfrL6k9H.js";import"./cross-ByskZVKs.js";import"./svgIconContainer-D81CTfk3.js";import"./useBaseUiId-CFJYUser.js";import"./InternalBackdrop-C0KpYaZu.js";import"./composite-Bv0d7hMq.js";import"./index-B7GSl1cF.js";import"./index-Db0VOaPK.js";import"./index-BJdDgk1_.js";import"./useEventCallback-DDUzUWfE.js";import"./SkeletonBar-DsJHAsa6.js";import"./LoadingCell-CjuoF-Gl.js";import"./ColumnConfigDialog-BCMc9_F6.js";import"./DraggableList-D3b9eCh7.js";import"./search-C3puoylr.js";import"./Input-BRm5VqU-.js";import"./useControlled-CUzvhz2W.js";import"./isEqual-CcLD5HAO.js";import"./isObject-0ofookEW.js";import"./Button-LWb_6Tdn.js";import"./ActionButton-1_m7nH98.js";import"./Checkbox-CIand9sc.js";import"./useValueChanged-BdU0Smwa.js";import"./CollapsiblePanel-Cd7daTfo.js";import"./MultiColumnSortDialog-r93u9dFu.js";import"./MenuTrigger-yO33KpiI.js";import"./CompositeItem-DVPpXfkZ.js";import"./ToolbarRootContext-D_pMZLcD.js";import"./getDisabledMountTransitionStyles-DkCuaO2I.js";import"./getPseudoElementBounds-ZVlk_Kim.js";import"./chevron-down-BLjWGzzL.js";import"./index-DxCyc1SX.js";import"./error-BqVc61FN.js";import"./BaseCbacBanner-B_-o7ENS.js";import"./makeExternalStore-CVmgvRee.js";import"./Tooltip-C1_rLlVZ.js";import"./PopoverPopup-D8uDacjF.js";import"./toNumber-BIjSEtt0.js";import"./useOsdkClient-Dp8UoSK2.js";import"./tick-D7pRbUig.js";import"./DropdownField-BoJ4CmTZ.js";import"./withOsdkMetrics-uRRxlu8C.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
