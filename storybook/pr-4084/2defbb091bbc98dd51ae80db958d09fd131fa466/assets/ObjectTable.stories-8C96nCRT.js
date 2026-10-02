import{j as i}from"./iframe-0nbFd4Up.js";import{O as p}from"./object-table-CGLRthHP.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CkG0AVQQ.js";import"./preload-helper-C9c2Zh8f.js";import"./Table-DnFyr-eR.js";import"./index-DwMakAAg.js";import"./Dialog-B1ObiwL9.js";import"./cross-DNUyMOOH.js";import"./svgIconContainer-CfgrNU9r.js";import"./useBaseUiId-hHYCbJGR.js";import"./InternalBackdrop-KhB9QZ7N.js";import"./composite-BsbtETqs.js";import"./index-5aC9zCcy.js";import"./index-CS8KPTZX.js";import"./index-D8qb59k0.js";import"./useEventCallback-nhi0bkCi.js";import"./SkeletonBar-BJn80Ony.js";import"./LoadingCell-CNKTGqtW.js";import"./ColumnConfigDialog-CPNjz2SP.js";import"./DraggableList-DnaVkmQi.js";import"./search-DDtr797p.js";import"./Input-YuE0Ls83.js";import"./useControlled-Gi7J51jw.js";import"./Button-Cn_l7fEs.js";import"./small-cross--2hEoLnO.js";import"./ActionButton-Tx5l-Qj1.js";import"./Checkbox-C7_DFOBZ.js";import"./useValueChanged-BdLBZwcj.js";import"./CollapsiblePanel-vf3p_QIK.js";import"./MultiColumnSortDialog-G_D659ph.js";import"./MenuTrigger-O_uVwxuL.js";import"./CompositeItem-C9hOZqfz.js";import"./ToolbarRootContext-B0NC_oEf.js";import"./getDisabledMountTransitionStyles-BI_PHpJd.js";import"./getPseudoElementBounds-aNzsWKIs.js";import"./chevron-down-BNwXq3g8.js";import"./index-BxiA765S.js";import"./error-CFI9j2MF.js";import"./BaseCbacBanner-BcZ2Qwl1.js";import"./makeExternalStore-Dwl2nMnb.js";import"./Tooltip-CRSGFbZX.js";import"./PopoverPopup-DFBzgF9k.js";import"./debounce--e6JvBD_.js";import"./useOsdkClient-CrSzWz2k.js";import"./tick-CC64mxmv.js";import"./DropdownField-DdLtiHfF.js";import"./isEqual-Dv1Q4U2c.js";import"./withOsdkMetrics-DTNlxinE.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
