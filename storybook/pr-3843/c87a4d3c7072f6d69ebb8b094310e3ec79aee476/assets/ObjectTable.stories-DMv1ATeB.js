import{j as i}from"./iframe-D1W6ppAK.js";import{O as p}from"./object-table-BXfRCJp3.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-gNPdhtm8.js";import"./preload-helper-BVLKfSQB.js";import"./Table-BA3k2QOE.js";import"./index-8ZY-fAEu.js";import"./Dialog-DdAy48XA.js";import"./cross-D_CxARA8.js";import"./svgIconContainer-DN-_s1rP.js";import"./useBaseUiId-CH82QQ2E.js";import"./InternalBackdrop-WZE3TanW.js";import"./composite-CpX9wK4w.js";import"./index-DDvK6xdc.js";import"./index-DUSFKfe-.js";import"./index-B72OI3Hp.js";import"./useEventCallback-BQDPyLuX.js";import"./SkeletonBar-C3_CvgP8.js";import"./LoadingCell-BVOptDHB.js";import"./ColumnConfigDialog-CpmEDpkh.js";import"./DraggableList-fLpFj9vo.js";import"./search-DG4ye0Iy.js";import"./Input-D9RKMHTW.js";import"./useControlled-BcGmUGgO.js";import"./isEqual-BacWMdXw.js";import"./isObject-CtnbCK_o.js";import"./Button-2-x2Eoj_.js";import"./ActionButton-BxfRFNfM.js";import"./Checkbox-BMadytLF.js";import"./useValueChanged-DF-zEjDf.js";import"./CollapsiblePanel-CHtrc9CX.js";import"./MultiColumnSortDialog-DAPTAM5w.js";import"./MenuTrigger-D-YqKWyr.js";import"./CompositeItem-B4Xj9JQ_.js";import"./ToolbarRootContext-GzlqhBPh.js";import"./getDisabledMountTransitionStyles-BRM969Fi.js";import"./getPseudoElementBounds-CrJcXgCc.js";import"./chevron-down-4suDLJVI.js";import"./index-BdK8S6bs.js";import"./error-C_dk0FTg.js";import"./BaseCbacBanner-BUpDuKyr.js";import"./makeExternalStore-DtSycEX-.js";import"./Tooltip-DryUTGTd.js";import"./PopoverPopup-BGuegJtv.js";import"./toNumber-DnOl7u43.js";import"./useOsdkClient-hHLZyAhP.js";import"./tick-f4TkQNhU.js";import"./DropdownField-CvFuIYZZ.js";import"./withOsdkMetrics-DBsUcf0H.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
