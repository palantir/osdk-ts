import{j as i}from"./iframe-pmNjzkSa.js";import{O as p}from"./object-table-OoaCicb2.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DG6g6EGL.js";import"./preload-helper-_91snrAe.js";import"./Table-DzuLxgjp.js";import"./index-DgbX2nfK.js";import"./Dialog-Dj_XmNIk.js";import"./cross-Dqi4IPXt.js";import"./svgIconContainer-BZe9E0fd.js";import"./useBaseUiId-yuPZM35O.js";import"./InternalBackdrop-jkPUR_Oo.js";import"./composite-CDFQZzUv.js";import"./index-Dk_LArqT.js";import"./index-CQnyyv3M.js";import"./index-CsLpz_wj.js";import"./useEventCallback-C-U0AvIK.js";import"./SkeletonBar-IQnueAmy.js";import"./LoadingCell-CvaNdxne.js";import"./ColumnConfigDialog-BGuSFe2m.js";import"./DraggableList-xMh6LhJ_.js";import"./search-Bxht82Ps.js";import"./Input-EJedlwTO.js";import"./useControlled-CWeh_fXo.js";import"./isEqual-Br5cO1iA.js";import"./isObject-05QMv73L.js";import"./Button-DcauLdOh.js";import"./ActionButton-CDJfJ1hj.js";import"./Checkbox-Dc3wsZor.js";import"./useValueChanged-DLwXBoLF.js";import"./CollapsiblePanel-DQIcivTP.js";import"./MultiColumnSortDialog-BLgWJwC1.js";import"./MenuTrigger-Cz7S7zn4.js";import"./CompositeItem-mJLhl0rA.js";import"./ToolbarRootContext-zyqED4Pq.js";import"./getDisabledMountTransitionStyles-BiGVZN_K.js";import"./getPseudoElementBounds-C18EUD7j.js";import"./chevron-down-BS9Gs3vv.js";import"./index-trp_UBRu.js";import"./error-BfEBsCaT.js";import"./BaseCbacBanner-sQVjtfVl.js";import"./makeExternalStore-ZxXmouAx.js";import"./Tooltip-CphYaAGS.js";import"./PopoverPopup-bE2595rX.js";import"./toNumber-0rnyOSLY.js";import"./useOsdkClient-ClOHwVNK.js";import"./tick-D0gSuB9T.js";import"./DropdownField-TOuNLrGn.js";import"./withOsdkMetrics-Ua95Z_9x.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
